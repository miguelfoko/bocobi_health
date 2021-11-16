package com.marcelDeudjui.bocobi2.springboot.repository;


import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.marcelDeudjui.bocobi2.springboot.model.Alerte;

@Repository
public interface AlerteRepository extends CrudRepository<Alerte, Long> {
	
	Alerte findById(long id);
	List<Alerte> findByType(String type);
	List<Alerte> findByCode(String code);
	List<Alerte> findByEnonceAlerte(String enonce);
	List<Alerte> findAll();
}