package waa.models;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@EqualsAndHashCode(callSuper = true)
@DiscriminatorValue("book")
@Data
public class Book extends Product{

    private String title;

    public Book() {

    }
}
