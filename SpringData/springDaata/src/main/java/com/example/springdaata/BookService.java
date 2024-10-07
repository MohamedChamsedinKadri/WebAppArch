package com.example.springdaata;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }
    public Book getBookById(int id) {
        return bookRepository.findById(id).orElse(null);
    }
    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    public Book updateBook(int id, Book bookDetails) {
        Book book = bookRepository.findById(id).orElse(null);
        if (book != null) {
            book.setTitle(bookDetails.getTitle());
            book.setIsbn(bookDetails.getIsbn());
            book.setPrice(bookDetails.getPrice());
            return bookRepository.save(book);
        }
        return null;
    }

    public void deleteBook(int id) {
        bookRepository.deleteById(id);
    }
}
