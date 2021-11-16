package com.marcelDeudjui.bocobi2.springboot.model;


import javax.persistence.*;

@Entity
@Table(name = "examens")
public class Examen {
    
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idExamen;

	@Column(name = "nomExamen")
	private String nomExamen;

	@Column(name = "descriptionExamen")
	private String descriptionExamen;

}
