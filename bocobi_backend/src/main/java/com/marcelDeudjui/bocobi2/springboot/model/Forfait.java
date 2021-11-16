package com.marcelDeudjui.bocobi2.springboot.model;


import javax.persistence.*;

@Entity
@Table(name = "forfaits")
public class Forfait {
   
    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idForfait;

	@Column(name = "nomForfait")
	private String nomForfait;
    
	@Column(name = "prixForfait")
	private long prixForfait;

	@Column(name = "periodeForfait")
    private String periodeForfait;
    
    @Column(name = "dureeForfait")
	private long dureeForfait;


}
