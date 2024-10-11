package waa.lab4.bidirectional.manytoone;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class Employee {
    @Id
    private Long id;

    private String name;

    @ManyToOne
    private Office office;
}
