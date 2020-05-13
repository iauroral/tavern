package com.iauroral.tavern.repository;

import com.iauroral.tavern.entity.Orders;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface OrdersRepository extends CrudRepository<Orders, Long> {

    List<Orders> findAllByCustom_Id(Long customId);
}
