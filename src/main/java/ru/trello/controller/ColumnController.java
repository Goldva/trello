package ru.trello.controller;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.trello.model.Column;
import ru.trello.repositories.ColumnRepository;

import java.util.List;

@Controller
@RequestMapping("/column")
public class ColumnController {
    @Autowired
    private ColumnRepository repository;

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity get(@RequestParam String id) {
        return null;
    }

    @RequestMapping(value = "/getList", method = RequestMethod.GET)
    @ResponseBody
    public List<Column> getList(@RequestParam(value = "id", required = false) String id) {
        return StringUtils.isBlank(id) ? repository.findAll() : repository.findByBoardId(id);
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
