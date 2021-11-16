package com.marcelDeudjui.bocobi2.springboot.model;


import javax.persistence.*;

@Entity
@Table(name = "modePaiements")
public class ModePaiement {
    
    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idModePaiement;

	@Column(name = "nomModePaiement")
	private String nomModePaiement;

}
