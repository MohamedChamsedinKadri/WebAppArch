package waa.lab3.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import waa.lab3.model.Book;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BookControllerURIVersioning {
    List<Book> books = new ArrayList<>();

    @GetMapping("/v1/books")
    public List<Book> getBooks() {
        return books;
    }
}
