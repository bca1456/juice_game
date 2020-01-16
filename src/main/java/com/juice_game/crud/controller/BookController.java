package com.juice_game.crud.controller;

import com.juice_game.crud.domain.Book;
import com.juice_game.crud.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController //убирает необходимость юзать @ResponseBody
@RequestMapping("/api/v1/crud")
public class BookController {

    @Autowired // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    private BookService bookService;

    @RequestMapping("/books")
    public List<Book> getAll(){
        System.out.println("================");
        bookService.getAll().forEach(System.out::println);
        System.out.println("================");
        return this.bookService.getAll();
    }

    @PostMapping("/books")
    public void addBook(@RequestBody Book book) {
        bookService.saveBook(book);
    }

    @GetMapping("/books/{book_id}")
    public @ResponseBody Book getBookById(@PathVariable("book_id") int book_id){
        return bookService.getBookById(book_id);
    }

    @DeleteMapping("/books/{book_id}")
    public void deleteBook(@PathVariable("book_id") int book_id){
        bookService.deleteById(book_id);
    }

    @PutMapping("/books")
    public Book updateBook(@RequestBody Book book){
        return bookService.updateBook(book);
    }
}
