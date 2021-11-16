package com.marcelDeudjui.bocobi2.springboot.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "medecins")
public class Medecin {
    
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idMedecin;

	@Column(name = "grade")
	private String grade;

	@Column(name = "specialite")
	private String specialite;
	
	//@OneToMany(mappedBy ="medecin")
	//@JoinColumn(name = "idMedecin")
	//private ArrayList<Teleconsultation> teleconsultations;
	
	public void prescrireMedicament(Medicament m) {
		
		
	}

}
