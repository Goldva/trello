package ru.trello.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import ru.trello.model.Column;

@Repository
public interface ColumnRepository extends MongoRepository<Column, String> {
}
