package com.example.springdaata;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends JpaRepository<Book, Integer> {
    // to rememberrr JpaRepository provides built-in methods for CRUD operations

}
