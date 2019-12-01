package ru.trello.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.trello.model.Card;
import ru.trello.model.User;
import ru.trello.repositories.CardRepository;
import ru.trello.repositories.UserRepository;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    public User findById(String id) {
        return repository.findById(id).orElse(null);
    }

    public List<User> findAll() {
        return repository.findAll();
    }

    public User save(User user) {
        return repository.save(user);
    }

    //TODO: save перезаписывает, использовать template с query
    public User edit(User user) {
        return null;
    }

    public void delete(String id) {
        repository.deleteById(id);
    }
}
