package com.example.assignement1.controller;

import com.example.assignement1.model.Book;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
public class BookController {

    @GetMapping("/books")
    public List<Book> getBooks() {
        List<Book> books = new ArrayList<>();

        Book book1 = new Book();
        book1.setId(1);
        book1.setTitle("Spring in Action");
        book1.setIsbn("978-1617294945");

        Book book2 = new Book();
        book2.setId(2);
        book2.setTitle("Effective Java");
        book2.setIsbn("978-0134685991");

        books.add(book1);
        books.add(book2);

        return books;
    }

    }


