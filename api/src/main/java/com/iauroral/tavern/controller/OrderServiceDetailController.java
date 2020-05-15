package com.iauroral.tavern.controller;

import com.iauroral.tavern.entity.OrderServiceDetail;
import com.iauroral.tavern.service.OrderServiceDetailService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("order-service")
public class OrderServiceDetailController {

    private final OrderServiceDetailService orderServiceDetailService;

    public OrderServiceDetailController(OrderServiceDetailService orderServiceDetailService) {
        this.orderServiceDetailService = orderServiceDetailService;
    }

    @GetMapping
    public List<OrderServiceDetail> findAll() {
        return orderServiceDetailService.findAll();
    }

    @PutMapping("{id}")
    public void provide(@PathVariable Long id) {
        orderServiceDetailService.provide(id);
    }
}
