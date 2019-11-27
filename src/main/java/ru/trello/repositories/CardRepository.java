package ru.trello.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import ru.trello.model.Card;

@Repository
public interface CardRepository extends MongoRepository<Card, String> {
}
