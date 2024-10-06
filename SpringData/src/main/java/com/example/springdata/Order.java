package com.example.springdata;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToMany
    @JoinTable (name = "order/books", joinColumns = @JoinColumn(name = "order/id"), inverseJoinColumns = @JoinColumn(name = "book/id"))
    private List<Book> books;


}
