package ru.trello.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.trello.model.Card;
import ru.trello.model.Column;
import ru.trello.repositories.CardRepository;

@Controller
@RequestMapping("/card")
public class CardController {
    @Autowired
    private CardRepository repository;

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity get(@RequestParam String id) {
        return null;
    }

    @RequestMapping(value = "/getList", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity getList() {
        return null;
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @ResponseBody
    public Card create(@RequestBody Card card) {
        return repository.save(card);
    }

    @RequestMapping(value = "/edit", method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity edit(@RequestBody Card card) {
        return null;
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    @ResponseBody
    public ResponseEntity delete(@RequestParam("id") String id) {
        return null;
    }

}
