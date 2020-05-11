package com.iauroral.tavern.controller;

import com.iauroral.tavern.entity.User;
import com.iauroral.tavern.service.UserService;
import org.hibernate.Session;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("user")
public class UserController {

    public static final String SessionKey ="login";

    private final HttpSession httpSession;
    private final UserService userService;

    public UserController(HttpSession httpSession, UserService userService) {
        this.httpSession = httpSession;
        this.userService = userService;
    }

    @PostMapping("login")
    public void login(@RequestBody User user, HttpServletResponse response) {
        if (userService.login(user)) {
            httpSession.setAttribute(SessionKey, user.getUsername());
        } else {
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
        }
    }

    @GetMapping("logout")
    public void logout() {
        httpSession.removeAttribute(SessionKey);
    }

    @GetMapping("me")
    public User me() {
        String username = (String) httpSession.getAttribute(SessionKey);
        return userService.findUserByUsername(username);
    }
}
