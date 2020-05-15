package com.iauroral.tavern.service.impl;

import com.iauroral.tavern.entity.*;
import com.iauroral.tavern.repository.OrderCateringDetailRepository;
import com.iauroral.tavern.repository.OrderRoomDetailRepository;
import com.iauroral.tavern.repository.OrderServiceDetailRepository;
import com.iauroral.tavern.repository.OrdersRepository;
import com.iauroral.tavern.service.*;
import com.iauroral.tavern.target.OrderTarget;

import javax.persistence.EntityNotFoundException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@org.springframework.stereotype.Service
public class OrdersServiceImpl implements OrdersService {

    private final UserService userService;
    private final RoomService roomService;
    private final ServiceService serviceService;
    private final CateringService cateringService;
    private final OrdersRepository ordersRepository;
    private final OrderRoomDetailRepository orderRoomDetailRepository;
    private final OrderCateringDetailRepository orderCateringDetailRepository;
    private final OrderServiceDetailRepository orderServiceDetailRepository;

    public OrdersServiceImpl(UserService userService, RoomService roomService, ServiceService serviceService, CateringService cateringService, OrdersRepository ordersRepository, OrderRoomDetailRepository orderRoomDetailRepository, OrderCateringDetailRepository orderCateringDetailRepository, OrderServiceDetailRepository orderServiceDetailRepository) {
        this.userService = userService;
        this.roomService = roomService;
        this.serviceService = serviceService;
        this.cateringService = cateringService;
        this.ordersRepository = ordersRepository;
        this.orderRoomDetailRepository = orderRoomDetailRepository;
        this.orderCateringDetailRepository = orderCateringDetailRepository;
        this.orderServiceDetailRepository = orderServiceDetailRepository;
    }

    private Orders getOrderById(Long orderId) {
        return ordersRepository.findById(orderId).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public List<Orders> getAllOrders() {
        List<Orders> orders = (List<Orders>) ordersRepository.findAll();
        return query(orders);
    }

    @Override
    public List<Orders> getAllOrdersByCurrentLoginUser() {
        Long id = userService.getCurrentLoginUser().getId();
        return query(ordersRepository.findAllByCustom_Id(id));
    }

    @Override
    public Orders queryOrderById(Long orderId) {
        Orders order = this.getOrderById(orderId);

        OrderRoomDetail roomDetail = this.orderRoomDetail(orderId);
        if (roomDetail != null) {
            roomDetail.setOrders(null);
            order.setOrderRoomDetail(roomDetail);
        }

        List<OrderCateringDetail> cateringDetails = this.orderCateringDetails(orderId);
        for (OrderCateringDetail cateringDetail : cateringDetails) {
            cateringDetail.setOrders(null);
        }
        order.setOrderCateringDetails(cateringDetails);

        List<OrderServiceDetail> serviceDetails = this.orderServiceDetails(orderId);
        for (OrderServiceDetail serviceDetail : serviceDetails) {
            serviceDetail.setOrders(null);
        }
        order.setOrderServiceDetails(serviceDetails);
        return order;
    }

    private List<Orders> query(List<Orders> orders) {
        for (Orders order : orders) {
            Long orderId = order.getId();

            OrderRoomDetail roomDetail = this.orderRoomDetail(orderId);
            if (roomDetail != null) {
                roomDetail.setOrders(null);
                order.setOrderRoomDetail(roomDetail);
            }

            List<OrderCateringDetail> cateringDetails = this.orderCateringDetails(orderId);
            for (OrderCateringDetail cateringDetail : cateringDetails) {
                cateringDetail.setOrders(null);
            }
            order.setOrderCateringDetails(cateringDetails);

            List<OrderServiceDetail> serviceDetails = this.orderServiceDetails(orderId);
            for (OrderServiceDetail serviceDetail : serviceDetails) {
                serviceDetail.setOrders(null);
            }
            order.setOrderServiceDetails(serviceDetails);
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
        Orders order = new Orders();
        order.setCustom(userService.getCurrentLoginUser());
        order.setStatus(Orders.NEW);
        ordersRepository.save(order);

        BigDecimal totalPrice = new BigDecimal("0");

        OrderRoomDetail roomDetail = new OrderRoomDetail();
        roomDetail.setOrders(order);
        Room room = roomService.getRoomById(target.getRoomId());
        roomDetail.setRoom(room);
        orderRoomDetailRepository.save(roomDetail);

        totalPrice = totalPrice.add(room.getPrice());

        roomService.setOrder(target.getRoomId());

        List<OrderCateringDetail> cateringDetails = new ArrayList<>();
        for (OrderTarget.CateringTarget cateringTarget : target.getCaterings()) {
            OrderCateringDetail cateringDetail = new OrderCateringDetail();
            cateringDetail.setOrders(order);
            Catering catering = cateringService.getCateringById(cateringTarget.getCateringId());
            cateringDetail.setCatering(catering);
            cateringDetail.setNumber(cateringTarget.getNumber());
            cateringDetails.add(cateringDetail);

            totalPrice = totalPrice.add(catering.getPrice().multiply(new BigDecimal(cateringTarget.getNumber())));
        }
        orderCateringDetailRepository.saveAll(cateringDetails);

        List<OrderServiceDetail> serviceDetails = new ArrayList<>();
        for (OrderTarget.ServiceTarget serviceTarget : target.getServices()) {
            OrderServiceDetail serviceDetail = new OrderServiceDetail();
            serviceDetail.setOrders(order);
            Service service = serviceService.getServiceById(serviceTarget.getServiceId());
            serviceDetail.setService(service);
            serviceDetail.setNumber(serviceTarget.getNumber());
            serviceDetails.add(serviceDetail);

            totalPrice = totalPrice.add(service.getPrice().multiply(new BigDecimal(serviceTarget.getNumber())));
        }
        orderServiceDetailRepository.saveAll(serviceDetails);

        order.setTotalPrice(totalPrice);
        ordersRepository.save(order);
    }

    @Override
    public void update(Long id, OrderTarget target) {
        Orders order = getOrderById(id);
        BigDecimal totalPrice = order.getTotalPrice();

        List<OrderCateringDetail> cateringDetails = new ArrayList<>();
        for (OrderTarget.CateringTarget cateringTarget : target.getCaterings()) {
            OrderCateringDetail cateringDetail = new OrderCateringDetail();
            cateringDetail.setOrders(order);
            Catering catering = cateringService.getCateringById(cateringTarget.getCateringId());
            cateringDetail.setCatering(catering);
            cateringDetail.setNumber(cateringTarget.getNumber());
            cateringDetails.add(cateringDetail);

            totalPrice = totalPrice.add(catering.getPrice().multiply(new BigDecimal(cateringTarget.getNumber())));
        }
        orderCateringDetailRepository.saveAll(cateringDetails);

        List<OrderServiceDetail> serviceDetails = new ArrayList<>();
        for (OrderTarget.ServiceTarget serviceTarget : target.getServices()) {
            OrderServiceDetail serviceDetail = new OrderServiceDetail();
            serviceDetail.setOrders(order);
            Service service = serviceService.getServiceById(serviceTarget.getServiceId());
            serviceDetail.setService(service);
            serviceDetail.setNumber(serviceTarget.getNumber());
            serviceDetails.add(serviceDetail);

            totalPrice = totalPrice.add(service.getPrice().multiply(new BigDecimal(serviceTarget.getNumber())));
        }
        orderServiceDetailRepository.saveAll(serviceDetails);

        order.setTotalPrice(totalPrice);
        ordersRepository.save(order);
    }

    @Override
    public void confirmOrder(Long orderId) {
        Orders orders = getOrderById(orderId);
        orders.setEmployee(userService.getCurrentLoginUser());
        orders.setStatus(Orders.CHECK);
        ordersRepository.save(orders);
        OrderRoomDetail roomDetail = this.orderRoomDetail(orderId);
        roomService.setCheck(roomDetail.getRoom().getId());
    }

    @Override
    public void cancelOrder(Long orderId) {
        Orders order = getOrderById(orderId);
        order.setStatus(Orders.CANCEL);
        ordersRepository.save(order);
        OrderRoomDetail roomDetail = this.orderRoomDetail(orderId);
        roomService.setFree(roomDetail.getRoom().getId());
    }

    @Override
    public void finishOrder(Long orderId) {
        Orders order = getOrderById(orderId);
        order.setStatus(Orders.FINISH);
        ordersRepository.save(order);
        OrderRoomDetail roomDetail = this.orderRoomDetail(orderId);
        roomService.setFree(roomDetail.getRoom().getId());
        roomService.setUnClean(roomDetail.getRoom().getId());
    }

    @Override
    public void changeRoom(Long orderId, Room roomId) {

    }
}
