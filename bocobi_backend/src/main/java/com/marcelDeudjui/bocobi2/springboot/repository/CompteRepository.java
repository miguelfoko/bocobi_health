package com.marcelDeudjui.bocobi2.springboot.repository;


import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.marcelDeudjui.bocobi2.springboot.model.Compte;

@Repository
public interface CompteRepository extends CrudRepository<Compte, Long> {

	Compte findById(long id);
	List<Compte> findAll();
	List<Compte> findByLogin(String adresse);

}