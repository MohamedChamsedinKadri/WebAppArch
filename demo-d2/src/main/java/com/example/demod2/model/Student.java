package com.example.demod2.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Student {
    private int id;
    private String firstname;
    private String lastname;
    private int age;
}
