package com.juice_game.crud.domain;

import javax.persistence.*;

@Entity
@Table(name = "Book")
public class Book {

    @Id //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String author;
    private int quantityOfPages;

    public Book(int id, String name, String author, int quantityOfPages){
        this.id = id;
        this.name = name;
        this.author = author;
        this.quantityOfPages = quantityOfPages;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getQuantityOfPages() {
        return quantityOfPages;
    }

    public void setQuantityOfPages(int quantityOfPages) {
        this.quantityOfPages = quantityOfPages;
    }
}
