package com.marcelDeudjui.bocobi2.springboot.repository;


import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.marcelDeudjui.bocobi2.springboot.model.Utilisateur;

@Repository
public interface UtilisateurRepository extends CrudRepository<Utilisateur, Long> {

	Utilisateur findById(long id);
	List<Utilisateur> findAll();
	List<Utilisateur> findByAdresseMailUtilisateur(String adresse);
	List<Utilisateur> findByNumeroTelephoneUtilisateur(long numero);
	List<Utilisateur> findByNomUtilisateur(String nom);
	List<Utilisateur> findByPrenomUtilisateur(String prenom);
	List<Utilisateur> findByDateNaissance(String dateN);
	List<Utilisateur> findByLieuNaissance(String lieu);
	List<Utilisateur> findByLieuResidence(String lieu);
	List<Utilisateur> findBySexeUtilisateur(String sexe);
}