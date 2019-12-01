package ru.trello.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.trello.model.Board;
import ru.trello.model.Card;
import ru.trello.repositories.BoardRepository;
import ru.trello.repositories.CardRepository;

import java.util.List;

@Service
public class CardService {
    @Autowired
    private CardRepository repository;

    public Card findById(String id) {
        return repository.findById(id).orElse(null);
    }

    public List<Card> findAll() {
        return repository.findAll();
    }

    public Card save(Card card) {
        return repository.save(card);
    }

    //TODO: save перезаписывает, использовать template с query
    public Card edit(Card card) {
        return null;
    }

    public void delete(String id) {
        repository.deleteById(id);
    }

}
