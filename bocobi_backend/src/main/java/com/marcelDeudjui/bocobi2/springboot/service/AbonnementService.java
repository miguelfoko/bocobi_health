package com.marcelDeudjui.bocobi2.springboot.service;



import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marcelDeudjui.bocobi2.springboot.model.Abonnement;
import com.marcelDeudjui.bocobi2.springboot.repository.AbonnementRepository;

import lombok.Data;




@Service
@Data
public class AbonnementService {

	
	  @Autowired
	    private AbonnementRepository abonnementRepository;

	    public Abonnement getAbonnement(final Long id) {
	    	return abonnementRepository.findById(id).get(); 
	    }

	    public List<Abonnement> getAbonnements() {
	        return abonnementRepository.findAll();
	    }
	    
	    public List<Abonnement> getAbonnementsByPrix(Float prix) {
	        return abonnementRepository.findByPrixAbonnement(prix);
	    }
	    
	    public List<Abonnement> getAbonnementsByDuree(int duree) {
	        return abonnementRepository.findByDureeAbonnement(duree);
	    }
	    
	    public List<Abonnement> getAbonnementsBylibelle(String libelle) {
	        return abonnementRepository.findByLibelleAbonnement(libelle);
	    }
	    
	    public List<Abonnement> getAbonnementsByPeriode(int periode) {
	        return abonnementRepository.findByPeriodeAbonnement(periode);
	    }
	    
	    public List<Abonnement> getAbonnementsByDate(Date date) {
	        return abonnementRepository.findByDateAbonnement(date);
	    }
	    

	    public void deleteAbonnement(final Long id) {
	        abonnementRepository.deleteById(id);
	    }

	    public Abonnement saveAbonnement(Abonnement abonnement) {
	        Abonnement savedAbonnement = abonnementRepository.save(abonnement);
	        return savedAbonnement;
	    }
	    
	  
}
