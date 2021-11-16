package com.marcelDeudjui.bocobi2.springboot.model;

import javax.persistence.*;

@Entity
@Table(name = "carnetElectroniques")
public class CarnetElectronique {

    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private long idCarnet;
    
	@Column(name = "taille")
	private Double taille;

	@Column(name = "poids")
    private Double poids;
    
	@Column(name = "groupeSanguin")
	private String groupeSanguin;

	@Column(name = "poulsParMinute")
    private Integer poulsParMinute;
    
	@Column(name = "temperature")
    private Integer temperature;
    



}
