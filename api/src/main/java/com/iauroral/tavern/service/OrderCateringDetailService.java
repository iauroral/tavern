package com.iauroral.tavern.service;

import com.iauroral.tavern.entity.OrderCateringDetail;

import java.util.List;

public interface OrderCateringDetailService {

    List<OrderCateringDetail> findAll();

    void provide(Long id);
}
