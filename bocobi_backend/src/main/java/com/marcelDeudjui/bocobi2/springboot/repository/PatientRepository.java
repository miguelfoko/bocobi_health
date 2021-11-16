package com.marcelDeudjui.bocobi2.springboot.repository;


import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.marcelDeudjui.bocobi2.springboot.model.Patient;

@Repository
public interface PatientRepository extends CrudRepository<Patient, Long> {

	
	Patient findById(long id);
	List<Patient> findAll();
}