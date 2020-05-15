package com.iauroral.tavern.controller;

import com.iauroral.tavern.entity.OrderCateringDetail;
import com.iauroral.tavern.service.OrderCateringDetailService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("order-catering")
public class OrderCateringDetailController {

    private final OrderCateringDetailService orderCateringDetailService;

    public OrderCateringDetailController(OrderCateringDetailService orderCateringDetailService) {
        this.orderCateringDetailService = orderCateringDetailService;
    }

    @GetMapping
    public List<OrderCateringDetail> findAll() {
        return orderCateringDetailService.findAll();
    }

    @PutMapping("{id}")
    public void provide(@PathVariable Long id) {
        orderCateringDetailService.provide(id);
    }
}
