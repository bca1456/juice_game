package com.juice_game;

import com.juice_game.crud.repos.BookRepository;
import com.juice_game.crud.service.BookService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Collections;

@SpringBootApplication
public class JuiceGameApplication {

    public static void main(String[] args) {
        SpringApplication.run(JuiceGameApplication.class, args);
    }

    @Bean
    CommandLineRunner init(BookService bookService, BookRepository bookRepository) {
        return args -> {
//            Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
//                Book book = new Book(name);
//                bookRepository.save(book);
//            });
            System.out.println("====main====");
            System.out.println(bookService.getAll());
            bookRepository.findAll().forEach(System.out::println);
            System.out.println("====main====");
        };
    }


}
