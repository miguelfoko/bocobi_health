package com.marcelDeudjui.bocobi2.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marcelDeudjui.bocobi2.springboot.model.Patient;
import com.marcelDeudjui.bocobi2.springboot.model.Utilisateur;
import com.marcelDeudjui.bocobi2.springboot.repository.PatientRepository;

@Service
public class PatientService {

	@Autowired
	private PatientRepository patientRepository;
	
	public Patient getPatient(long id) {
		return patientRepository.findById(id);
	}
	
	public List<Patient> getPatients(){
		return patientRepository.findAll();
	}
	
	public void deletePatient(final Long id) {
		patientRepository.deleteById(id);
	}

    public Patient savePatient(Patient patient) {
    	Patient savedPatient = patientRepository.save(patient);
        return savedPatient;
    }
	
}
