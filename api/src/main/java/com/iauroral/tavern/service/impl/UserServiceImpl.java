package com.iauroral.tavern.service.impl;

import com.iauroral.tavern.entity.User;
import com.iauroral.tavern.repository.UserRepository;
import com.iauroral.tavern.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findAllStaff() {
        return userRepository.findUserByAuthorityGreaterThan(0);
    }

    @Override
    public List<User> findAllCustom() {
        return userRepository.findUserByAuthorityIs(0);
    }
}
