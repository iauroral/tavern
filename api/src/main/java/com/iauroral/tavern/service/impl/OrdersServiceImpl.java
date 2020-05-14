package com.iauroral.tavern.service.impl;

import com.iauroral.tavern.entity.*;
import com.iauroral.tavern.repository.OrderCateringDetailRepository;
import com.iauroral.tavern.repository.OrderRoomDetailRepository;
import com.iauroral.tavern.repository.OrderServiceDetailRepository;
import com.iauroral.tavern.repository.OrdersRepository;
import com.iauroral.tavern.service.OrdersService;
import com.iauroral.tavern.service.RoomService;
import com.iauroral.tavern.service.UserService;
import com.iauroral.tavern.target.OrderTarget;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdersServiceImpl implements OrdersService {

    private final UserService userService;
    private final RoomService roomService;
    private final OrdersRepository ordersRepository;
    private final OrderRoomDetailRepository orderRoomDetailRepository;
    private final OrderCateringDetailRepository orderCateringDetailRepository;
    private final OrderServiceDetailRepository orderServiceDetailRepository;

    public OrdersServiceImpl(UserService userService, RoomService roomService, OrdersRepository ordersRepository, OrderRoomDetailRepository orderRoomDetailRepository, OrderCateringDetailRepository orderCateringDetailRepository, OrderServiceDetailRepository orderServiceDetailRepository) {
        this.userService = userService;
        this.roomService = roomService;
        this.ordersRepository = ordersRepository;
        this.orderRoomDetailRepository = orderRoomDetailRepository;
        this.orderCateringDetailRepository = orderCateringDetailRepository;
        this.orderServiceDetailRepository = orderServiceDetailRepository;
    }

    @Override
    public List<Orders> getAllOrdersByCurrentLoginUser() {
        Long id = userService.getCurrentLoginUser().getId();
        return query(ordersRepository.findAllByCustom_Id(id));
    }

    private List<Orders> query(List<Orders> orders) {
        for (Orders order : orders) {
            Long orderId = order.getId();
            order.setOrderRoomDetail(this.orderRoomDetail(orderId));
            order.setOrderCateringDetails(this.orderCateringDetails(orderId));
            order.setOrderServiceDetails(this.orderServiceDetails(orderId));
        }
        return orders;
    }

    private OrderRoomDetail orderRoomDetail(Long orderId) {
        return orderRoomDetailRepository.findOrderRoomDetailByOrders_Id(orderId);
    }

    private List<OrderCateringDetail> orderCateringDetails(Long orderId) {
        return orderCateringDetailRepository.findAllByOrders_Id(orderId);
    }

    private List<OrderServiceDetail> orderServiceDetails(Long orderId) {
        return orderServiceDetailRepository.findAllByOrders_Id(orderId);
    }

    @Override
    public void createOrder(OrderTarget target) {
//        OrderRoomDetail orderRoomDetail = order.getOrderRoomDetail();
//        List<OrderCateringDetail> orderCateringDetails = order.getOrderCateringDetails();
//        List<OrderServiceDetail> orderServiceDetails = order.getOrderServiceDetails();
//
//        order.setCustom(userService.getCurrentLoginUser());
//        order.setStatus(Orders.NEW);
//        ordersRepository.save(order);
//
//        orderRoomDetail.setOrders(order);
//        orderRoomDetailRepository.save(orderRoomDetail);
//
//        roomService.setOrder(orderRoomDetail.getRoom().getId());
//
//        for (OrderCateringDetail orderCateringDetail : orderCateringDetails) {
//            orderCateringDetail.setOrders(order);
//        }
//        orderCateringDetailRepository.saveAll(orderCateringDetails);
//
//        for (OrderServiceDetail orderServiceDetail : orderServiceDetails) {
//            orderServiceDetail.setOrders(order);
//        }
//        orderServiceDetailRepository.saveAll(orderServiceDetails);
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
