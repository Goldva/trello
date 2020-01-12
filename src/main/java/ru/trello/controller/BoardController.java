package ru.trello.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.trello.model.Board;
import ru.trello.model.Column;
import ru.trello.service.BoardService;

import java.util.List;

@Controller
@RequestMapping("/board")
public class BoardController {
    @Autowired
    private BoardService boardService;

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    @ResponseBody
    public Board get(String id) {
        return boardService.findById(id);
    }

    @RequestMapping(value = "/getList", method = RequestMethod.GET)
    @ResponseBody
    public List<Board> getList() {
        return boardService.findAll();
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @ResponseBody
    public Board create(@RequestBody Board board) {
        return boardService.save(board);
    }

    @RequestMapping(value = "/edit", method = RequestMethod.PUT)
    @ResponseBody
    public Board edit(@RequestBody Board board) {
        return boardService.save(board);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    @ResponseBody
    public ResponseEntity delete(@RequestParam("id") String id) {
        boardService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
