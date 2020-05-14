package com.iauroral.tavern.service;

import com.iauroral.tavern.entity.Room;

import java.util.List;

public interface RoomService {

    List<Room> findAllRoomByStatus(Integer status);

    void setClean(Long roomId);

    void setUnClean(Long roomId);

    void setOrder(Long roomId);

    Room getRoomById(Long roomId);
}
