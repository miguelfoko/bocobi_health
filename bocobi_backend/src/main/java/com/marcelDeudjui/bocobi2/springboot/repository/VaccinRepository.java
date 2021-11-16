package com.marcelDeudjui.bocobi2.springboot.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.marcelDeudjui.bocobi2.springboot.model.Vaccin;

@Repository
public interface VaccinRepository extends CrudRepository<Vaccin, Long> {

}