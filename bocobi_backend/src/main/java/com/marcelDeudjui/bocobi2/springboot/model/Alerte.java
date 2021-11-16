package com.marcelDeudjui.bocobi2.springboot.model;


import javax.persistence.*;

@Entity
@Table(name = "alertes")
public class Alerte {
    
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idAlerte;

	@Column(name = "type")
	private String type;

	@Column(name = "code")
    private String code;
    
	@Column(name = "enonceAlerte")
	private String enonceAlerte;

}
