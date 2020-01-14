package com.juice_game.crud.service.impl;

import com.juice_game.crud.domain.Book;
import com.juice_game.crud.repos.BookRepository;
import com.juice_game.crud.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service //Использование данной аннотации позволит искать бины-сервисы автоматически
public class BookServiceImpl implements BookService {
    @Autowired //Аннотация позволяет автоматически установить значение поля.
    private BookRepository bookRepository;

    @Override
    public void saveBook(Book book) {
        bookRepository.save(book);
    }

    @Override
    public void deleteById(int id) {
        bookRepository.deleteById(id);
    }

    @Override
    public Book getBookById(int id) {
        return null;
    }

    @Override
    public Book updateBook(Book book) {
        Book newBook = new Book(book.getId(), book.getName(), book.getAuthor(), book.getQuantityOfPages());
        this.bookRepository.deleteById(book.getId());
        return bookRepository.save(newBook);
    }

    @Override
    public List<Book> getAll() {
        return (List<Book>) bookRepository.findAll();
    }
}
