package com.marcelDeudjui.bocobi2.springboot.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
@Table(name = "patients")
public class Patient extends Utilisateur {
    
	
	private long idPatient;

	public Patient(long idUtilisateur, String adresseMailUtilisateur, long numeroTelephoneUtilisateur,
			String nomUtilisateur, String prenomUtilisateur, String dateNaissance, String lieuNaissance,
			String lieuResidence, String sexeUtilisateur, Compte compte, long idPatient) {
		super(idUtilisateur, adresseMailUtilisateur, numeroTelephoneUtilisateur, nomUtilisateur, prenomUtilisateur,
				dateNaissance, lieuNaissance, lieuResidence, sexeUtilisateur, compte);
		this.idPatient = idPatient;
	}
    
    
/*
    @OneToMany(mappedBy="patient")
    @JoinColumn(name ="idPatient")
    private ArrayList<Teleconsultation> teleconsultations;
    */
    
}
