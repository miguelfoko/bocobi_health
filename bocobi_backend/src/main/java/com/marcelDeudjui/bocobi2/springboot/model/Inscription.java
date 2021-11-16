package com.marcelDeudjui.bocobi2.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor
public class Inscription {

	private final long id =0;
	
	private String login;


	private String password;


	
	public Compte getCompte(Utilisateur user) {
		
		login = new String(adresseMailUtilisateur);
		return new Compte(id,login,password,user);
	}
	

	private String adresseMailUtilisateur;


	private long numeroTelephoneUtilisateur;


	private String nomUtilisateur;


	private String prenomUtilisateur;


	private String dateNaissance;


	private String lieuNaissance;


	private String lieuResidence;


	private String sexeUtilisateur;
	
	public Utilisateur getUtilisateur() {
		return new Utilisateur(id,adresseMailUtilisateur,numeroTelephoneUtilisateur,nomUtilisateur,prenomUtilisateur,
				dateNaissance,lieuNaissance,lieuResidence, sexeUtilisateur,null);
	}
	
	public Patient getPatient() {
		return new Patient(id,adresseMailUtilisateur,numeroTelephoneUtilisateur,nomUtilisateur,prenomUtilisateur,
				dateNaissance,lieuNaissance,lieuResidence, sexeUtilisateur,null,id);
	}
	
	
}
