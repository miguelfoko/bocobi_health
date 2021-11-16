package com.marcelDeudjui.bocobi2.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
@Table(name = "comptes")
public class Compte {

    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idCompte;


	@Column(name = "login")
	private String login;

	@Column(name = "password")
	private String password;
    
	
	@OneToOne( fetch=FetchType.EAGER)
	private Utilisateur utilisateurCompte;
}
