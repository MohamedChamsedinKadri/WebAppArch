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
@RequestMapping("/books/custom-media")
public class BookControllerMediaTypeVersioning {
    List<Book> books = new ArrayList<>();

    @GetMapping(value = "/books/{id}", produces = "application/cs.miu.edu-v2+json")
    public Book getProducts(@PathVariable int id) throws Exception {
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
