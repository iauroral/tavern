package com.iauroral.tavern.repository;

import com.iauroral.tavern.entity.OrderCateringDetail;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface OrderCateringDetailRepository extends CrudRepository<OrderCateringDetail, Long> {

    List<OrderCateringDetail> findAllByOrders_Id(Long orderId);
}
