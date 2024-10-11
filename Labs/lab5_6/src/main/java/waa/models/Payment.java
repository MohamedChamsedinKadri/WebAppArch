package waa.models;

import jakarta.annotation.sql.DataSourceDefinition;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import lombok.Data;


@Data
@Embeddable
public class Payment {
    private String paydate;
    private double amount;
}
