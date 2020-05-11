package com.iauroral.tavern.service.impl;

import com.iauroral.tavern.entity.Room;
import com.iauroral.tavern.repository.RoomRepository;
import com.iauroral.tavern.service.RoomService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomServiceImpl implements RoomService {

    private final RoomRepository roomRepository;

    public RoomServiceImpl(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    @Override
    public List<Room> findAllRoomByStatus(Integer status) {
        if (status == null) {
            return (List<Room>) roomRepository.findAll();
        }
        return roomRepository.findAllByStatusIs(status);
    }
}
