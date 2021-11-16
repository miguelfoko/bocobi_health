package com.marcelDeudjui.bocobi2.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.marcelDeudjui.bocobi2.springboot.model.Compte;
import com.marcelDeudjui.bocobi2.springboot.model.Utilisateur;
import com.marcelDeudjui.bocobi2.springboot.service.UtilisateurService;

@RestController
public class UtilisateurController {

	@Autowired
	private UtilisateurService utilisateurService;
	
	
	@PostMapping("/createUser")
	public Utilisateur createUser(@RequestBody Utilisateur user) {
		return utilisateurService.saveUtilisateur(user);
	}
	
	@GetMapping("/getUsers")
	public List<Utilisateur> getUtilisateur(){
		return utilisateurService.getUtilisateurs();
	}
	
	@GetMapping("/getUser/{id}")
	public Utilisateur getUtilisateur(@PathVariable long id){
		return utilisateurService.getUtilisateur(id);
	}
	
	
	@GetMapping("/getUtilisateur/{mail}")
	public List<Utilisateur> getUtilisateurByAdresse(@PathVariable String mail){
		return utilisateurService.getUtilisateurByAdresseMailUtilisateur(mail);
	}
	
	@GetMapping("/getUtilsateur/{nom}")
	public List<Utilisateur> getUtilisateurBynom(@PathVariable String nom){
		return utilisateurService.getUtilisateurByNomUtilisateur(nom);
	}
	
	@GetMapping("/getUtilisateur/{prenom}")
	public List<Utilisateur> getUtilisateurByprenom(@PathVariable String prenom){
		return utilisateurService.getUtilisateurByNomUtilisateur(prenom);
	}
}
