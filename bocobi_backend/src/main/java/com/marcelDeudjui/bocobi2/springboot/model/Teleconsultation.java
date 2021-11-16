package com.marcelDeudjui.bocobi2.springboot.model;


import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name = "teleconsultations")
public class Teleconsultation {
    
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idTeleconsultation;

	@Column(name = "dateTeleconsultation")
	private Date dateTeleconsultation;

	@Column(name = "heureTeleconsultation")
	private Date heureTeleconsultation;
/*
	@OneToOne(mappedBy="teleconsultation")
	@JoinColumn(name="idFacture")
	private Facture facture;
	
	@ManyToOne
	@JoinColumn(name= "idPatient")
	private Patient patient;
	
	@ManyToOne
	@JoinColumn(name="idMedecin")
	private Medecin medecin;
    */
}
