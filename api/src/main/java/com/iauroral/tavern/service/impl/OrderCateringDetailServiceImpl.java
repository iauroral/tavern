package com.iauroral.tavern.service.impl;

import com.iauroral.tavern.entity.OrderCateringDetail;
import com.iauroral.tavern.entity.OrderRoomDetail;
import com.iauroral.tavern.entity.Orders;
import com.iauroral.tavern.repository.OrderCateringDetailRepository;
import com.iauroral.tavern.service.OrderCateringDetailService;
import com.iauroral.tavern.service.OrdersService;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class OrderCateringDetailServiceImpl implements OrderCateringDetailService {

    private final OrdersService ordersService;
    private final OrderCateringDetailRepository orderCateringDetailRepository;

    public OrderCateringDetailServiceImpl(OrdersService ordersService, OrderCateringDetailRepository orderCateringDetailRepository) {
        this.ordersService = ordersService;
        this.orderCateringDetailRepository = orderCateringDetailRepository;
    }

    @Override
    public List<OrderCateringDetail> findAll() {
        List<OrderCateringDetail> cateringDetails = orderCateringDetailRepository.findAllByOrders_Status(Orders.CHECK);
        for (OrderCateringDetail cateringDetail : cateringDetails) {
            OrderRoomDetail roomDetail = ordersService.orderRoomDetail(cateringDetail.getOrders().getId());
            cateringDetail.setRoom(roomDetail.getRoom());
        }
        return cateringDetails;
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
