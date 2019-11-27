package ru.trello.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.trello.model.User;

@Controller
@RequestMapping("/user")
public class UserController {
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity create(@RequestBody User user) {
        return null;
    }

    @RequestMapping(value = "/edit", method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity edit(@RequestBody User user) {
        return null;
    }

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity get(@RequestParam("id") String id) {
        return null;
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    @ResponseBody
    public ResponseEntity delete(@RequestParam("id") String id) {
        return null;
    }
}
