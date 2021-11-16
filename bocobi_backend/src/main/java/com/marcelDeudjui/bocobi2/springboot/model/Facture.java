package com.marcelDeudjui.bocobi2.springboot.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "factures")
public class Facture {
    
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idFacture;

	@Column(name = "referenceFacture")
	private String referenceFacture;
	
	@OneToOne
	@JoinColumn(name="idTeleconsultation")
	private Teleconsultation teleconsultation;

}
