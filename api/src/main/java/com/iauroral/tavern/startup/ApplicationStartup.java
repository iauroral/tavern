package com.iauroral.tavern.startup;

import com.iauroral.tavern.entity.User;
import com.iauroral.tavern.repository.UserRepository;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ApplicationStartup implements ApplicationListener<ContextRefreshedEvent> {

    private final UserRepository userRepository;

    public ApplicationStartup(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        List<User> users = (List<User>) userRepository.findAll();
        if (users.size() >= 4) {
            return;
        }

        User admin = new User();
        admin.setName("系统管理员");
        admin.setUsername("admin");
        admin.setPassword("admin");
        admin.setAuthority(User.ADMIN);
        userRepository.save(admin);

        User manager = new User();
        manager.setName("酒店经理");
        manager.setUsername("manager");
        manager.setPassword("manager");
        manager.setAuthority(User.MANAGE);
        userRepository.save(manager);

        User front = new User();
        front.setName("酒店前台");
        front.setUsername("front");
        front.setPassword("front");
        front.setAuthority(User.FRONT);
        userRepository.save(front);

        User customer = new User();
        customer.setName("顾客");
        customer.setUsername("customer");
        customer.setPassword("customer");
        customer.setAuthority(User.CUSTOM);
        userRepository.save(customer);
    }
}
