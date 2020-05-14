package com.iauroral.tavern.controller;

import com.iauroral.tavern.entity.Orders;
import com.iauroral.tavern.service.OrdersService;
import com.iauroral.tavern.target.OrderTarget;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("orders")
public class OrdersController {

    private final OrdersService ordersService;

    public OrdersController(OrdersService ordersService) {
        this.ordersService = ordersService;
    }

    @GetMapping
    public List<Orders> getAll() {
        return ordersService.getAllOrders();
    }

    @GetMapping("custom")
    public List<Orders> custom() {
        return ordersService.getAllOrdersByCurrentLoginUser();
    }

    @PostMapping
    public void order(@RequestBody OrderTarget target) {
        ordersService.createOrder(target);
    }

    @PutMapping("cancel/{id}")
    public void cancel(@PathVariable Long id) {
        ordersService.cancelOrder(id);
    }
}
