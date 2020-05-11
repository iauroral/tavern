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
        if (users.size() != 0) {
            return;
        }

        User user = new User();
        user.setName("系统管理员");
        user.setUsername("admin");
        user.setPassword("admin");
        user.setAuthority(User.ADMIN);
        userRepository.save(user);
    }
}
