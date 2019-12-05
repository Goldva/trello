package ru.trello.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.trello.model.Column;

@Controller
@RequestMapping("/card")
public class CardController {
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
    public ResponseEntity create(@RequestBody Column column) {
        return null;
    }

    @RequestMapping(value = "/edit", method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity edit(@RequestBody Column column) {
        return null;
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    @ResponseBody
    public ResponseEntity delete(@RequestParam("id") String id) {
        return null;
    }

}
