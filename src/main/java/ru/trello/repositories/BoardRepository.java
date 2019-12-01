package ru.trello.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import ru.trello.model.Board;

@Repository
public abstract class BoardRepository implements MongoRepository<Board, String> {
//    @Autowired
//    private MongoTemplate template;
}
