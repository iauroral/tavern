package com.iauroral.tavern.repository;

import com.iauroral.tavern.entity.OrderRoomDetail;
import org.springframework.data.repository.CrudRepository;

public interface OrderRoomDetailRepository extends CrudRepository<OrderRoomDetail, Long> {

    OrderRoomDetail findOrderRoomDetailByOrders_Id(Long orderId);
}
