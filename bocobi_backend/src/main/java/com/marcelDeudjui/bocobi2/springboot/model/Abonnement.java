package com.marcelDeudjui.bocobi2.springboot.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "abonnements")
public class Abonnement {
    
	@Id
	/*@SequenceGenerator(
			name = "abonnementSequence",
			sequenceName = "abonnementSequence",
			allocationSize = 1
			)
	
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator ="abonnementSequence")*/
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idAbonnement;

	@Column(name = "dateAbonnement")
	private Date dateAbonnement;

	@Column(name = "heureAbonnement")
	private int heureAbonnement;
	
	@Column(name = "dureeAbonnement")
	private int dureeAbonnement;
	
	@Column(name = "prixAbonnement")
	private Float prixAbonnement;
	
	@Column(name = "libelleAbonnement")
	private String libelleAbonnement;
	
	@Column(name = "periodeAbonnement")
	private int periodeAbonnement;

	

}
