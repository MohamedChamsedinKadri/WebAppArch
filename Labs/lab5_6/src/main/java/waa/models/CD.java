package waa.models;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;
@Entity
@EqualsAndHashCode(callSuper = true)
@DiscriminatorValue("cd")
@Data
public class CD extends Product{
    private String artist;
}
