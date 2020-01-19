package ru.trello.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.trello.model.Column;

import java.util.List;

@Repository
public interface ColumnRepository extends MongoRepository<Column, String> {
    @Query("{'boardId': :#{#boardId}}")
    List<Column> findByBoardId(@Param("boardId") String boardId);
}
