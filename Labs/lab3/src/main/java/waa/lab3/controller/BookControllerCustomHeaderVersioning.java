package waa.lab3.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import waa.lab3.model.Book;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/books/custom-header")
public class BookControllerCustomHeaderVersioning {
    List<Book> books = new ArrayList<>();

    @GetMapping(value = "/books/{id}", headers = "X-API-VERSION=2")
    public Book getBook(@PathVariable int id) throws Exception {
        Optional<Book> prod = books
                .stream()
                .filter(p -> p.getId() == id)
                .findFirst();
        if (prod.isPresent()) {
            return prod.get();
        } else {
            throw new Exception("Not Found");
        }
    }
}
