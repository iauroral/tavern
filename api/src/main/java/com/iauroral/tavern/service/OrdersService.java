package com.iauroral.tavern.service;

import com.iauroral.tavern.entity.Orders;
import com.iauroral.tavern.entity.Room;
import com.iauroral.tavern.target.OrderTarget;

import java.util.List;

/**
 * 1. 顾客创建订单
 * 2. 前台查看所有订单 确认该订单
 */
public interface OrdersService {

    /**
     * 查询所有订单
     */
    List<Orders> getAllOrders();

    /**
     * 查询属于当前登录用户的所有订单
     */
    List<Orders> getAllOrdersByCurrentLoginUser();

    /**
     * 根据 id 查询订单
     */
    Orders queryOrderById(Long orderId);

    /**
     * 预约 创建订单
     */
    void createOrder(OrderTarget target);

    /**
     * 更新 编辑订单
     */
    void update(Long id, OrderTarget target);

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
}
