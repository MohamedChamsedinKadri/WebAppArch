package com.example.springdaata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/book")
public class BookVersioningController {
    @Autowired
    private BookService bookService;

    @GetMapping(headers = "X-API-VERSION=1")
    public List<Book> getAllBooksV1(){
        return bookService.getAllBooks();
    }

    @GetMapping(headers = "X-API-VERSION=2")
    public List<Book> getAllBooksVersionV2(){
        return bookService.getAllBooks();
    }
}
