package com.iauroral.tavern.service.impl;

import com.iauroral.tavern.entity.Service;
import com.iauroral.tavern.repository.ServiceRepository;
import com.iauroral.tavern.service.ServiceService;

import javax.persistence.EntityNotFoundException;

@org.springframework.stereotype.Service
public class ServiceServiceImpl implements ServiceService {

    private final ServiceRepository serviceRepository;

    public ServiceServiceImpl(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    @Override
    public Service getServiceById(Long id) {
        return serviceRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }
}
