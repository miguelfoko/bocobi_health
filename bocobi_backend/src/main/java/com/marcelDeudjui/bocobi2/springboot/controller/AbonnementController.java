package com.marcelDeudjui.bocobi2.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.marcelDeudjui.bocobi2.springboot.model.Abonnement;
import com.marcelDeudjui.bocobi2.springboot.service.AbonnementService;

@RestController
public class AbonnementController {

	@Autowired
	private AbonnementService abonnementService;
	
	
	@PostMapping("/Abonnement")
	public Abonnement createAbonnement(@RequestBody Abonnement abonnement) {
		return abonnementService.saveAbonnement(abonnement);
	}
	
	@GetMapping("/AbonnementList")
	public List<Abonnement> getAbonnements() {
		return abonnementService.getAbonnements();
	}
	
	@GetMapping("/AbonnementList/{id}")
	public Abonnement getAbonnement(@PathVariable("id") final Long id) {
		return abonnementService.getAbonnement(id);
	}
	
	
}
