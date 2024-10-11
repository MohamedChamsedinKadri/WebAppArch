package waa.lab8.service;

import waa.lab8.models.Book;

import java.util.List;

public interface BookService {
    public List<Book> getBooks();
    public Book getBook(long id);
    public Book createBook(Book book);

    public Book updateBook(Book book);
    public Boolean deleteBook(Long id);
}
