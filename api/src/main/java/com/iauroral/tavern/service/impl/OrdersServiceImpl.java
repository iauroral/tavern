package com.iauroral.tavern.service.impl;

import com.iauroral.tavern.entity.Orders;
import com.iauroral.tavern.entity.Room;
import com.iauroral.tavern.service.OrdersService;
import org.springframework.stereotype.Service;

@Service
public class OrdersServiceImpl implements OrdersService {
    @Override
    public void createOrder(Orders order) {

    }

    @Override
    public void confirmOrder(Long orderId) {

    }

    @Override
    public void cancelOrder(Long orderId) {

    }

    @Override
    public void finishOrder(Long orderId) {

    }

    @Override
    public void changeRoom(Long orderId, Room roomId) {

    }

    @Override
    public void orderCatering(Long orderId, Long cateringId, Long number) {

    }

    @Override
    public void orderService(Long orderId, Long serviceId, Long number) {

    }
}
