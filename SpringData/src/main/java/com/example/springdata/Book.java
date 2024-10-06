package com.example.springdata;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String category;
    private double price;


    @ManyToOne
    @JoinColumn(name ="author_id")
    private Author author;

    @ManyToMany
    private List<Order> orders;

    private LocalDate orderDate;
}
