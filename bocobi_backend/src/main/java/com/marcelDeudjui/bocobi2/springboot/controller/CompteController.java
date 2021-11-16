package com.marcelDeudjui.bocobi2.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.marcelDeudjui.bocobi2.springboot.model.Compte;
import com.marcelDeudjui.bocobi2.springboot.service.CompteService;

@RestController
public class CompteController {

	@Autowired
	private CompteService compteService;
	
	@PostMapping("/createCompte")
	public Compte createCompte(@RequestBody Compte compte) {
		return compteService.saveCompte(compte);
	}
	
	@GetMapping("/getComptes")
	public List<Compte> getComptes(){
		return compteService.getComptes();
	}
	
	@GetMapping("/getCompte/{id}")
	public Compte getCompte(@PathVariable long id){
		return compteService.getCompte(id);
	}
	
	@GetMapping("/getCompte/{login}")
	public List<Compte> getCompteByNumero(@PathVariable String log){
		return compteService.getCompteByLogin(log);
	}
	

	
	
}
