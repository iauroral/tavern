package com.iauroral.tavern.repository;

import com.iauroral.tavern.entity.OrderServiceDetail;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface OrderServiceDetailRepository extends CrudRepository<OrderServiceDetail, Long> {

    List<OrderServiceDetail> findAllByOrders_Id(Long orderId);

    List<OrderServiceDetail> findAllByOrders_Status(Integer status);
}
