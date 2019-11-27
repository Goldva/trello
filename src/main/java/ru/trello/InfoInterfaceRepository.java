package ru.trello;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface InfoInterfaceRepository extends MongoRepository<InfoInterface, String> {
//    @Query()
//    Info getAll ();

}
