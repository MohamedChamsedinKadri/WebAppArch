package com.example.springdata;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataNotFoundException;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("books")
public class BookController {
    @Autowired
    private BookRepository bookRepository;

    @GetMapping
    public List<Book> getAllBooks() {
        return BookRepository.findAll();
    }
    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }
    @PostMapping("/{id}")
    public Book getBookById(@PathVariable Long id, @RequestBody Book bookDetails) {
        return bookRepository.findById(id).orElseThrow(() -> new ConfigDataResourceNotFoundException());
    }
    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id, @RequestBody Book bookDetails) {
        Book book = bookRepository.findById(id).orElseThrow(() -> new ConfigDataNotFoundException());

        book.setTitle(bookDetails.getTitle());
        book.setCategory(bookDetails.getCategory());
        return bookRepository.save(book);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable Long id) {
        Book book bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found"));
        bookRepository.delete(book);
        return ResponseEntity.ok().build();
    }



}
