package ru.trello.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.trello.model.Card;
import ru.trello.model.Column;
import ru.trello.repositories.CardRepository;
import ru.trello.repositories.ColumnRepository;

import java.util.List;

@Service
public class ColumnService {
    @Autowired
    private ColumnRepository repository;

    public Column findById(String id) {
        return repository.findById(id).orElse(null);
    }

    public List<Column> findAll() {
        return repository.findAll();
    }

    public Column save(Column column) {
        return repository.save(column);
    }

    //TODO: save перезаписывает, использовать template с query
    public Column edit(Column column) {
        return null;
    }

    public void delete(String id) {
        repository.deleteById(id);
    }
}
