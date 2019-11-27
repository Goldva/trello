package ru.trello;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InfoRepository extends MongoRepository<Info, String> {
//    @Query()
//    Info getAll ();

}
