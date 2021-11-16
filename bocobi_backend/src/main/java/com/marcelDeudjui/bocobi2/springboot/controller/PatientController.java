package com.marcelDeudjui.bocobi2.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.marcelDeudjui.bocobi2.springboot.model.Compte;
import com.marcelDeudjui.bocobi2.springboot.model.Inscription;
import com.marcelDeudjui.bocobi2.springboot.model.Patient;
import com.marcelDeudjui.bocobi2.springboot.model.Utilisateur;
import com.marcelDeudjui.bocobi2.springboot.service.CompteService;
import com.marcelDeudjui.bocobi2.springboot.service.PatientService;
import com.marcelDeudjui.bocobi2.springboot.service.UtilisateurService;


@RestController
public class PatientController {

	
	@Autowired
	private PatientService patientService;
	@Autowired
	private UtilisateurService utilisateurService;
	@Autowired

	private CompteService compteService;

	
	@CrossOrigin
	@PostMapping("/createPatient")
	public Patient createPatient(@RequestBody Inscription inscription) {
		
		Utilisateur u =inscription.getUtilisateur();
		utilisateurService.saveUtilisateur(u);
		
		Compte c =inscription.getCompte(u);
		compteService.saveCompte(c);
		
		u.setCompte(c);
		Patient patient =inscription.getPatient();
		patient.setCompte(c);
		return patientService.savePatient(patient);
	}
	@CrossOrigin
	@GetMapping("/getPatients")
	public List<Patient> getPatients(){
		return patientService.getPatients();
	}
	
	@GetMapping("/getPatient/{id}")
	public Patient getCompte(@PathVariable long id){
		return patientService.getPatient(id);
	}
}
