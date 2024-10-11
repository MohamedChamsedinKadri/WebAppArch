package waa.lab3.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import waa.lab3.model.Book;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/books")
public class BookController {

    List<Book> books = new ArrayList<>();

    @GetMapping
    public List<Book> getBookList() {
        return books;
    }


    @GetMapping("/{id}")
    public Book getBookById(@PathVariable int id) throws Exception {
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

    @PostMapping("")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void saveBook(@RequestBody Book book) {
        books.add(book);
    }

    @PutMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void updateBook(@PathVariable int id, @RequestBody Book book) throws Exception {
        Optional<Book> prod = books
                .stream()
                .filter(p -> p.getId() == id)
                .findFirst();
        if (prod.isPresent()) {
            var old = prod.get();
            old.setTitle(book.getTitle());
            old.setIsbn(book.getIsbn());
        } else {
            throw new Exception("Not Found");
        }
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable int id) {
        books = books.stream().filter(p -> p.getId() != id)
                .collect(Collectors.toList());
    }
}
