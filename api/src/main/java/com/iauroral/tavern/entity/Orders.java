package com.iauroral.tavern.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Calendar;
import java.util.List;

@Entity
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal totalPrice;

    /**
     * 顾客信息
     */
    @ManyToOne
    private User custom;

    /**
     * 员工信息
     */
    @ManyToOne
    private User employee;

    /**
     * 预定时间
     */
    private Calendar reserve;

    /**
     * 0: 新下单
     * 1: 已入住
     * 2: 已取消
     * 3: 已完结
     */
    private Integer status;

    @Transient
    private OrderRoomDetail orderRoomDetail;

    @Transient
    private List<OrderCateringDetail> orderCateringDetails;

    @Transient
    private List<OrderServiceDetail> orderServiceDetails;

    public Orders() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }

    public User getCustom() {
        return custom;
    }

    public void setCustom(User custom) {
        this.custom = custom;
    }

    public User getEmployee() {
        return employee;
    }

    public void setEmployee(User employee) {
        this.employee = employee;
    }

    public Calendar getReserve() {
        return reserve;
    }

    public void setReserve(Calendar reserve) {
        this.reserve = reserve;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public OrderRoomDetail getOrderRoomDetail() {
        return orderRoomDetail;
    }

    public void setOrderRoomDetail(OrderRoomDetail orderRoomDetail) {
        this.orderRoomDetail = orderRoomDetail;
    }

    public List<OrderCateringDetail> getOrderCateringDetails() {
        return orderCateringDetails;
    }

    public void setOrderCateringDetails(List<OrderCateringDetail> orderCateringDetails) {
        this.orderCateringDetails = orderCateringDetails;
    }

    public List<OrderServiceDetail> getOrderServiceDetails() {
        return orderServiceDetails;
    }

    public void setOrderServiceDetails(List<OrderServiceDetail> orderServiceDetails) {
        this.orderServiceDetails = orderServiceDetails;
    }
}
