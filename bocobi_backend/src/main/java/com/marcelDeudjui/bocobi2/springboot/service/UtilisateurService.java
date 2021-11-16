package com.marcelDeudjui.bocobi2.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marcelDeudjui.bocobi2.springboot.model.Utilisateur;
import com.marcelDeudjui.bocobi2.springboot.repository.UtilisateurRepository;

@Service
public class UtilisateurService {

	@Autowired
	private UtilisateurRepository utilisateurRepository;
	
	public Utilisateur getUtilisateur(long id) {
		return utilisateurRepository.findById(id);
	}
	
	public List<Utilisateur> getUtilisateurs(){
		return utilisateurRepository.findAll();
	}
	
	public List<Utilisateur> getUtilisateurByAdresseMailUtilisateur(String adresse){
		return utilisateurRepository.findByAdresseMailUtilisateur(adresse);
	}
	
	public List<Utilisateur> getUtilisateurByNumeroTelephoneutilisateur(long numero){
		return utilisateurRepository.findByNumeroTelephoneUtilisateur(numero);
	}
	
	public	List<Utilisateur> getUtilisateurByPrenomUtilisateur(String prenom){
		return utilisateurRepository.findByPrenomUtilisateur(prenom);
	}
	
	public	List<Utilisateur> getUtilisateurByDateNaissanceUtilisateur(String dateN){
		return utilisateurRepository.findByDateNaissance(dateN);
	}
	
	public	List<Utilisateur> getUtilisateurByLieuNaissanceUtilisateur(String lieu){
		return utilisateurRepository.findByLieuNaissance(lieu);
	}
	
	public	List<Utilisateur> getUtilisateurByNomUtilisateur(String lieu){
		return utilisateurRepository.findByLieuResidence(lieu);
	}
	
	public	List<Utilisateur> getUtilisateurBySexe(String sexe){
		return utilisateurRepository.findBySexeUtilisateur(sexe);
	}
	
	
	public void deleteUtilisateur(final Long id) {
		utilisateurRepository.deleteById(id);
	}

    public Utilisateur saveUtilisateur(Utilisateur user) {
    	Utilisateur savedUtilisateur = utilisateurRepository.save(user);
        return savedUtilisateur;
    }
}
