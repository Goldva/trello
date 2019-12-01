package ru.trello.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.trello.model.Column;

public abstract class AbstractController {
    @RequestMapping(value = "/get", method = RequestMethod.GET)
    @ResponseBody
    public abstract ResponseEntity get(@RequestParam("id") String id);

    @RequestMapping(value = "getList", method = RequestMethod.GET)
    @ResponseBody
    public abstract ResponseEntity getList();

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @ResponseBody
    public abstract ResponseEntity create(@RequestBody Object object);

    @RequestMapping(value = "/edit", method = RequestMethod.PUT)
    @ResponseBody
    public abstract ResponseEntity edit(@RequestBody Column column);

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    @ResponseBody
    public abstract ResponseEntity delete(@RequestParam("id") String id);

}
