package ru.trello.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

public abstract class AbstractController {
    @RequestMapping("/get")
    @ResponseBody
    public abstract ResponseEntity get(@RequestParam("id") String id);
}
