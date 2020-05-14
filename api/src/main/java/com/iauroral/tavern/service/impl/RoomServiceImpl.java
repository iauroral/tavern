package com.iauroral.tavern.service.impl;

import com.iauroral.tavern.entity.Room;
import com.iauroral.tavern.repository.RoomRepository;
import com.iauroral.tavern.service.RoomService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    @Override
    public void setClean(Long roomId) {
        Optional<Room> optional = roomRepository.findById(roomId);
        if (optional.isPresent()) {
            Room room = optional.get();
            room.setClean(true);
            roomRepository.save(room);
        }
    }

    @Override
    public void setUnClean(Long roomId) {
        Optional<Room> optional = roomRepository.findById(roomId);
        if (optional.isPresent()) {
            Room room = optional.get();
            room.setClean(false);
            roomRepository.save(room);
        }
    }
}
