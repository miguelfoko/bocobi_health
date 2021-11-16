package com.marcelDeudjui.bocobi2.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marcelDeudjui.bocobi2.springboot.model.Compte;
import com.marcelDeudjui.bocobi2.springboot.repository.CompteRepository;

@Service
public class CompteService {
	
	@Autowired
	private CompteRepository compteRepository;
	
	public Compte getCompte(long id) {
		return compteRepository.findById(id);
	}
	
	public List<Compte> getComptes(){
		return compteRepository.findAll();
	}
	
	
	public	List<Compte> getCompteByLogin(String login){
		return compteRepository.findByLogin(login);
	}
	
	public void deleteCompte(final Long id) {
	      compteRepository.deleteById(id);
	}

    public Compte saveCompte(Compte compte) {
        Compte savedCompte = compteRepository.save(compte);
        return savedCompte;
    }
}
