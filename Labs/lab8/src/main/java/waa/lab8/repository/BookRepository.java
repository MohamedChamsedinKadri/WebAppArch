package waa.lab8.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import waa.lab8.models.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

}
