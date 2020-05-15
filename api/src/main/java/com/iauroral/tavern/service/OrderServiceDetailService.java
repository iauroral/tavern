package com.iauroral.tavern.service;

import com.iauroral.tavern.entity.OrderServiceDetail;

import java.util.List;

public interface OrderServiceDetailService {

    List<OrderServiceDetail> findAll();

    void provide(Long id);
}
