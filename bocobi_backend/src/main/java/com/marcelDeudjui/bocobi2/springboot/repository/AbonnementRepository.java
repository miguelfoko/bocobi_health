package com.marcelDeudjui.bocobi2.springboot.repository;


import java.sql.Date;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.marcelDeudjui.bocobi2.springboot.model.Abonnement;

@Repository
public interface AbonnementRepository extends CrudRepository<Abonnement, Long> {
	
	Abonnement findById(long id);
	List<Abonnement> findAll();
	List<Abonnement> findByPrixAbonnement(Float prix);
	List<Abonnement> findByLibelleAbonnement(String libelle);
	List<Abonnement> findByPeriodeAbonnement(int periode);
	List<Abonnement> findByDureeAbonnement(int duree);
	List<Abonnement> findByHeureAbonnement(int heure);
	List<Abonnement> findByDateAbonnement(Date date);

}