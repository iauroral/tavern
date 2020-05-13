package com.iauroral.tavern.service;

import com.iauroral.tavern.entity.User;

import java.util.List;

public interface UserService {

    List<User> findAllStaff();

    List<User> findAllCustom();

    boolean login(User user);

    User findUserByUsername(String username);

    User getCurrentLoginUser();
}
