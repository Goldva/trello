package ru.trello;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RezoRepository extends MongoRepository<Rezo, String> {
}
