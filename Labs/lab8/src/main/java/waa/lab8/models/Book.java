package waa.lab8.models;

import lombok.Data;

import jakarta.persistence.*;

//2. Create an Unidirectional ManyToOne association between Book and Publisher using annotations
@Entity
@Data
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String isbn;
    private double price;

}
