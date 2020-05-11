package com.iauroral.tavern.repository;

import com.iauroral.tavern.entity.Catering;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "catering")
public interface CateringRepository extends CrudRepository<Catering, Long> {
}
