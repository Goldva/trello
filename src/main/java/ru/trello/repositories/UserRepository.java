package ru.trello.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import ru.trello.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
}
