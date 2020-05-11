package com.iauroral.tavern.repository;

import com.iauroral.tavern.entity.Service;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "service")
public interface ServiceRepository extends CrudRepository<Service, Long> {
}
