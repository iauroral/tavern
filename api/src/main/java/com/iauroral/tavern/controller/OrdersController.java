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

    @GetMapping("{id}")
    public Orders findById(@PathVariable Long id) {
        return ordersService.queryOrderById(id);
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

    @PutMapping("confirm/{id}")
    public void confirm(@PathVariable Long id) {
        ordersService.confirmOrder(id);
    }

    @PutMapping("finish/{id}")
    public void finish(@PathVariable Long id) {
        ordersService.finishOrder(id);
    }
}
