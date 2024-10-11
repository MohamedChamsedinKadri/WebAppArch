package waa.lab3.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import waa.lab3.model.Book;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BookControllerRequestParamVersioning {
    List<Book> books = new ArrayList<>();

    @GetMapping(value = "v1/books", params = "version=1")
    public List<Book> getProducts(@RequestParam String version) {
        return books;
    }
}
