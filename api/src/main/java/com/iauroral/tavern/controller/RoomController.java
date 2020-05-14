package com.iauroral.tavern.controller;

import com.iauroral.tavern.entity.Room;
import com.iauroral.tavern.service.RoomService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("room")
public class RoomController {

    private final RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @GetMapping("status")
    public List<Room> findAllByStatus(@RequestParam(required = false) Integer status) {
        return roomService.findAllRoomByStatus(status);
    }

    @PostMapping("clean/{roomId}")
    public void clean(@PathVariable Long roomId) {
        roomService.setClean(roomId);
    }
}
