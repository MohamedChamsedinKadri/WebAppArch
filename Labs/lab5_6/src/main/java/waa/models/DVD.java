package waa.models;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@EqualsAndHashCode(callSuper = true)
@DiscriminatorValue("dvd")
@Data
public class DVD extends Product{
    private String genre;
}
