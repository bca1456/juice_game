package com.juice_game.crud.controller;

import com.juice_game.crud.domain.Book;
import com.juice_game.crud.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController //убирает необходимость юзать @ResponseBody
@RequestMapping("/api/v1/crud")
public class BookController {

    @Autowired
    private BookService bookService;

    @RequestMapping("/books")
    public List<Book> getAll(){
        return this.bookService.getAll();
    }
}
