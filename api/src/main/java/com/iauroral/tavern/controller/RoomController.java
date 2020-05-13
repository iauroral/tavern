package com.iauroral.tavern.controller;

import com.iauroral.tavern.entity.Room;
import com.iauroral.tavern.service.RoomService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("room")
public class RoomController {

    private final RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @GetMapping("status/{status}")
    public List<Room> findAllByStatus(@PathVariable Integer status) {
        return roomService.findAllRoomByStatus(status);
    }
}
