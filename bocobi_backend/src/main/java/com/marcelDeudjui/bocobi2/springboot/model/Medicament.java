package com.marcelDeudjui.bocobi2.springboot.model;


import javax.persistence.*;

@Entity
@Table(name = "medicaments")
public class Medicament {
    
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idMedicament;

	@Column(name = "nomMedicament")
	private String nomMedicament;

	@Column(name = "descriptionMedicament")
	private String descriptionMedicament;

}
