package com.marcelDeudjui.bocobi2.springboot.model;


import javax.persistence.*;

@Entity
@Table(name = "conseils")
public class Conseil {
    
    
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idConseil;

	@Column(name = "auteur")
	private String auteur;

	@Column(name = "enonceConseil")
	private String enonceConseil;

	@Column(name = "nomConseil")
	private String nomConseil;

	@Column(name = "roleConseil")
	private String roleConseil;

}
