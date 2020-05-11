package com.iauroral.tavern.config;

import com.iauroral.tavern.entity.*;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

@Configuration
public class CustomRestConfiguration implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Catering.class)
                .exposeIdsFor(Order.class)
                .exposeIdsFor(OrderCateringDetail.class)
                .exposeIdsFor(OrderRoomDetail.class)
                .exposeIdsFor(OrderServiceDetail.class)
                .exposeIdsFor(Room.class)
                .exposeIdsFor(Service.class)
                .exposeIdsFor(User.class);
    }
}
