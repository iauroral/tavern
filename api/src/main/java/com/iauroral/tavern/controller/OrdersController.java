package com.iauroral.tavern.controller;

import com.iauroral.tavern.entity.Orders;
import com.iauroral.tavern.service.OrdersService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("orders")
public class OrdersController {

    private final OrdersService ordersService;

    public OrdersController(OrdersService ordersService) {
        this.ordersService = ordersService;
    }

    @GetMapping("custom")
    public List<Orders> orders() {
        return ordersService.getAllOrdersByCurrentLoginUser();
    }
}
