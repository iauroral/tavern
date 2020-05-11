package com.iauroral.tavern.repository;

import com.iauroral.tavern.entity.Room;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "room")
public interface RoomRepository extends CrudRepository<Room, Long> {
}
