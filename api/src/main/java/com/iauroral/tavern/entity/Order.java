package com.iauroral.tavern.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Calendar;

@Entity
public class Order {

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

    public Order() {
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
}
