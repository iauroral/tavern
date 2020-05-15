package com.iauroral.tavern.service.impl;

import com.iauroral.tavern.entity.OrderCateringDetail;
import com.iauroral.tavern.entity.Orders;
import com.iauroral.tavern.repository.OrderCateringDetailRepository;
import com.iauroral.tavern.service.OrderCateringDetailService;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class OrderCateringDetailServiceImpl implements OrderCateringDetailService {

    private final OrderCateringDetailRepository orderCateringDetailRepository;

    public OrderCateringDetailServiceImpl(OrderCateringDetailRepository orderCateringDetailRepository) {
        this.orderCateringDetailRepository = orderCateringDetailRepository;
    }

    @Override
    public List<OrderCateringDetail> findAll() {
        return orderCateringDetailRepository.findAllByOrders_Status(Orders.CHECK);
    }

    private OrderCateringDetail getById(Long id) {
        return orderCateringDetailRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public void provide(Long id) {
        OrderCateringDetail cateringDetail = getById(id);
        cateringDetail.setProvide(true);
        orderCateringDetailRepository.save(cateringDetail);
    }
}
