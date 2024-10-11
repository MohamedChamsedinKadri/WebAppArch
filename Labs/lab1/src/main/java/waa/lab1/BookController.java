package waa.lab1;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BookController {
    private final List<Book> books = new ArrayList<>() {
        {
            add(new Book(1, "Java Spring", "1234js"));
            add(new Book(2, "React", "1235re"));
            add(new Book(3, "WAA", "1239wa"));
        }
    };

    @GetMapping("/books")
    List<Book> getBooks() {
        return books;
    }
}
