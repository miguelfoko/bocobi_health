package com.marcelDeudjui.bocobi2.springboot.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Table(name = "utilisateurs")
public class Utilisateur {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idUtilisateur;

	@Column(name = "adresseMailUtilisateur")
	protected String adresseMailUtilisateur;

	@Column(name = "numeroTelephoneUtilisateur")
	protected long numeroTelephoneUtilisateur;

	@Column(name = "nomUtilisateur")
	protected String nomUtilisateur;

	@Column(name = "prenomUtilisateur")
	protected String prenomUtilisateur;

	@Column(name = "dateNaissance")
	protected String dateNaissance;

	@Column(name = "lieuNaissance")
	protected String lieuNaissance;

	@Column(name = "lieuResidence")
	protected String lieuResidence;

	@Column(name = "sexeUtilisateur")
	protected String sexeUtilisateur;
	
	
	@OneToOne(mappedBy = "utilisateurCompte" ,fetch=FetchType.EAGER)
	private Compte compte; 


	


    
}
