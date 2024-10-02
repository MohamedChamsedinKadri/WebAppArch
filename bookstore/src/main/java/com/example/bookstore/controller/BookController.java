package com.example.bookstore.controller;

import com.example.bookstore.model.Book;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BookController {

    // Versioning: Media Type Versioning - v1
    @GetMapping(value = "/books", produces = "application/v1+json")
    public List<Book> getBooksV1() {
        List<Book> books = new ArrayList<>();
        books.add(new Book(1, "Spring Intro", "299-111-878", 10));
        books.add(new Book(2, "Spring Advanced", "399-111-878", 30));
        return books;
    }

    // Versioning: Media Type Versioning - v2
    @GetMapping(value = "/books", produces = "application/v2+json")
    public List<Book> getBooksV2() {
        List<Book> books = new ArrayList<>();
        books.add(new Book(3, "Spring Architecture", "499-111-878", 50));
        books.add(new Book(4, "Spring Security", "599-111-878", 40));
        return books;
    }

    // POST - Add a new book (without versioning)
    @PostMapping("/books")
    public ResponseEntity<Book> postBook(@RequestBody Book newBook) {
        List<Book> books = getBooksV1();  // Dummy list for now
        books.add(newBook);
        return new ResponseEntity<>(newBook, HttpStatus.CREATED);
    }

    // PUT - Update an existing book by ID
    @PutMapping("/books/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable int id, @RequestBody Book updatedBook) {
        List<Book> books = getBooksV1(); // Dummy list for now
        Book existingBook = books.stream().filter(b -> b.getId() == id).findFirst().orElse(null);
        if (existingBook == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        existingBook.setTitle(updatedBook.getTitle());
        existingBook.setIsbn(updatedBook.getIsbn());
        existingBook.setPrice(updatedBook.getPrice());
        return new ResponseEntity<>(existingBook, HttpStatus.OK);
    }

    // DELETE - Delete a book by ID
    @DeleteMapping("/books/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable int id) {
        List<Book> books = getBooksV1();  // Dummy list for now
        Book bookToDelete = books.stream().filter(b -> b.getId() == id).findFirst().orElse(null);
        if (bookToDelete == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        books.remove(bookToDelete);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Versioning: Custom Header Versioning - v1
    @GetMapping(value = "/books", headers = "X-API-VERSION=1")
    public List<Book> getBooksCustomHeaderV1() {
        return getBooksV1();
    }

    // Versioning: Custom Header Versioning - v2
    @GetMapping(value = "/books", headers = "X-API-VERSION=2")
    public List<Book> getBooksCustomHeaderV2() {
        return getBooksV2();
    }

    // Versioning: URI Versioning - v1
    @GetMapping("/v1/books")
    public List<Book> getBooksUriV1() {
        return getBooksV1();
    }

    // Versioning: URI Versioning - v2
    @GetMapping("/v2/books")
    public List<Book> getBooksUriV2() {
        return getBooksV2();
    }

    // Versioning: Request Parameter Versioning - v1
    @GetMapping(value = "/books", params = "version=1")
    public List<Book> getBooksByParamV1() {
        return getBooksV1();
    }

    // Versioning: Request Parameter Versioning - v2
    @GetMapping(value = "/books", params = "version=2")
    public List<Book> getBooksByParamV2() {
        return getBooksV2();
    }
}
