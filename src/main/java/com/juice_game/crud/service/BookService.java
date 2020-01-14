package com.juice_game.crud.service;

import com.juice_game.crud.domain.Book;

import java.util.List;

public interface BookService {
    void saveBook(Book book);
    void deleteById(int id);
    Book getBookById(int id);
    Book updateBook(Book book);
    List<Book> getAll();
}
