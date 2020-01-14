package com.juice_game.crud.repos;

import com.juice_game.crud.domain.Book;
import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Integer> {
}
