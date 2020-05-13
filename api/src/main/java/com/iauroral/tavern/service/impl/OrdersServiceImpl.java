package com.iauroral.tavern.service.impl;

import com.iauroral.tavern.entity.Orders;
import com.iauroral.tavern.entity.Room;
import com.iauroral.tavern.repository.OrdersRepository;
import com.iauroral.tavern.service.OrdersService;
import com.iauroral.tavern.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdersServiceImpl implements OrdersService {

    private final UserService userService;
    private final OrdersRepository ordersRepository;

    public OrdersServiceImpl(UserService userService, OrdersRepository ordersRepository) {
        this.userService = userService;
        this.ordersRepository = ordersRepository;
    }

    @Override
    public List<Orders> getAllOrdersByCurrentLoginUser() {
        Long id = userService.getCurrentLoginUser().getId();
        return ordersRepository.findAllByCustom_Id(id);
    }

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
