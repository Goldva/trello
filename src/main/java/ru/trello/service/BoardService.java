package ru.trello.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.trello.model.Board;
import ru.trello.repositories.BoardRepository;

import java.util.List;

@Service
public class BoardService {
    @Autowired
    private BoardRepository repository;

    public Board findById(String id) {
        return repository.findById(id).orElse(null);
    }

    public List<Board> findAll() {
        return repository.findAll();
    }

    public Board save(Board board) {
        return repository.save(board);
    }

    //TODO: save перезаписывает, использовать template с query
    public Board edit(Board board) {
        return null;
    }

    public void delete(String id) {
        repository.deleteById(id);
    }
}
