package com.example.bookstore.utils;

import org.springframework.stereotype.Component;

@Component
public class BookUtil {

    public boolean isValidPrice(Double price) {
        return price != null && price > 0;
    }

    public boolean isValidTitle(String title) {
        return title != null && !title.trim().isEmpty();
    }
}
