package com.marcelDeudjui.bocobi2.springboot.model;


import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name = "rendezVous")
public class RendezVous {
    
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idRendezVous;

	@Column(name = "dateRendezVous")
	private Date dateRendezVous;

	@Column(name = "heureRendezVous")
	private Date heureRendezVous;

}
