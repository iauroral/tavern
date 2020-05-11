package com.iauroral.tavern.repository;

import com.iauroral.tavern.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(path = "user")
public interface UserRepository extends CrudRepository<User, Long> {

    List<User> findUserByAuthorityGreaterThan(Integer authority);

    List<User> findUserByAuthorityIs(Integer authority);

    User findUserByUsername(String username);
}
