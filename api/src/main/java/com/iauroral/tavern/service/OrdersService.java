package com.iauroral.tavern.service;

import com.iauroral.tavern.entity.Orders;
import com.iauroral.tavern.entity.Room;

import java.util.List;

/**
 * 1. 顾客创建订单
 * 2. 前台查看所有订单 确认该订单
 */
public interface OrdersService {

    /**
     * 查询属于当前登录用户的所有订单
     */
    List<Orders> getAllOrdersByCurrentLoginUser();

    /**
     * 预约 创建订单
     */
    void createOrder(Orders order);

    /**
     * 办理入住 确定订单
     */
    void confirmOrder(Long orderId);

    /**
     * 取消订单
     */
    void cancelOrder(Long orderId);

    /**
     * 完结订单
     */
    void finishOrder(Long orderId);

    /**
     * 顾客要求换房间
     */
    void changeRoom(Long orderId, Room roomId);

    /**
     * 点餐
     */
    void orderCatering(Long orderId, Long cateringId, Long number);

    /**
     * 点服务
     */
    void orderService(Long orderId, Long serviceId, Long number);
}
