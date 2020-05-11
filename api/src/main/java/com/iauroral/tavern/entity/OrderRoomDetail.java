package com.iauroral.tavern.entity;

import javax.persistence.*;
import java.util.Calendar;

@Entity
public class OrderRoomDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Orders orders;

    @ManyToOne
    private Room room;

    /**
     * 入住时间
     */
    private Calendar checkIn;

    /**
     * 退房时间
     */
    private Calendar checkOut;

    public OrderRoomDetail() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Orders getOrders() {
        return orders;
    }

    public void setOrders(Orders orders) {
        this.orders = orders;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public Calendar getCheckIn() {
        return checkIn;
    }

    public void setCheckIn(Calendar checkIn) {
        this.checkIn = checkIn;
    }

    public Calendar getCheckOut() {
        return checkOut;
    }

    public void setCheckOut(Calendar checkOut) {
        this.checkOut = checkOut;
    }
}
