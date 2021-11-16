package com.marcelDeudjui.bocobi2.springboot.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.marcelDeudjui.bocobi2.springboot.model.Teleconsultation;

@Repository
public interface TeleconsultationRepository extends CrudRepository<Teleconsultation, Long> {

}
