package com.iauroral.tavern.service.impl;

import com.iauroral.tavern.entity.Catering;
import com.iauroral.tavern.repository.CateringRepository;
import com.iauroral.tavern.service.CateringService;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;

@Service
public class CateringServiceImpl implements CateringService {

    private final CateringRepository cateringRepository;

    public CateringServiceImpl(CateringRepository cateringRepository) {
        this.cateringRepository = cateringRepository;
    }

    @Override
    public Catering getCateringById(Long id) {
        return cateringRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }
}
