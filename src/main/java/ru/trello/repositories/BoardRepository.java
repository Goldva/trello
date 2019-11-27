package ru.trello.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import ru.trello.model.Board;

@Repository
public interface BoardRepository extends MongoRepository<Board, String> {
}
