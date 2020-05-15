package com.iauroral.tavern.service.impl;

import com.iauroral.tavern.entity.OrderRoomDetail;
import com.iauroral.tavern.entity.OrderServiceDetail;
import com.iauroral.tavern.entity.Orders;
import com.iauroral.tavern.repository.OrderServiceDetailRepository;
import com.iauroral.tavern.service.OrderServiceDetailService;
import com.iauroral.tavern.service.OrdersService;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class OrderServiceDetailServiceImpl implements OrderServiceDetailService {

    private final OrdersService ordersService;
    private final OrderServiceDetailRepository orderServiceDetailRepository;

    public OrderServiceDetailServiceImpl(OrdersService ordersService, OrderServiceDetailRepository orderServiceDetailRepository) {
        this.ordersService = ordersService;
        this.orderServiceDetailRepository = orderServiceDetailRepository;
    }

    private OrderServiceDetail getById(Long id) {
        return orderServiceDetailRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public List<OrderServiceDetail> findAll() {
        List<OrderServiceDetail> serviceDetails = orderServiceDetailRepository.findAllByOrders_Status(Orders.CHECK);
        for (OrderServiceDetail serviceDetail : serviceDetails) {
            OrderRoomDetail roomDetail = ordersService.orderRoomDetail(serviceDetail.getOrders().getId());
            serviceDetail.setRoom(roomDetail.getRoom());
        }
        return serviceDetails;
    }

    @Override
    public void provide(Long id) {
        OrderServiceDetail serviceDetail = getById(id);
        serviceDetail.setProvide(true);
        orderServiceDetailRepository.save(serviceDetail);
    }
}
