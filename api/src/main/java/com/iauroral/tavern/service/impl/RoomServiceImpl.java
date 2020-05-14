package com.iauroral.tavern.service.impl;

import com.iauroral.tavern.entity.Room;
import com.iauroral.tavern.repository.RoomRepository;
import com.iauroral.tavern.service.RoomService;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
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

    @Override
    public void setClean(Long roomId) {
        Room room = this.getRoomById(roomId);
        room.setClean(true);
        roomRepository.save(room);
    }

    @Override
    public void setUnClean(Long roomId) {
        Room room = this.getRoomById(roomId);
        room.setClean(false);
        roomRepository.save(room);
    }

    @Override
    public void setOrder(Long roomId) {
        Room room = this.getRoomById(roomId);
        room.setStatus(Room.ORDER);
        roomRepository.save(room);
    }

    @Override
    public Room getRoomById(Long roomId) {
        return roomRepository.findById(roomId).orElseThrow(EntityNotFoundException::new);
    }
}
