package com.iauroral.tavern.service;

import com.iauroral.tavern.entity.Room;

import java.util.List;

public interface RoomService {

    List<Room> findAllRoomByStatus(Integer status);
}
