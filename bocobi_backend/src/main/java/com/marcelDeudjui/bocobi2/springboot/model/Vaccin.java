package com.marcelDeudjui.bocobi2.springboot.model;


import javax.persistence.*;

@Entity
@Table(name = "vaccins")
public class Vaccin {
    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idVaccin;

	@Column(name = "nomVaccin")
	private String nomVaccin;

	@Column(name = "nomMaladie")
	private String nomMaladie;

	@Column(name = "descriptionVaccin")
	private String descriptionVaccin;

    
}
