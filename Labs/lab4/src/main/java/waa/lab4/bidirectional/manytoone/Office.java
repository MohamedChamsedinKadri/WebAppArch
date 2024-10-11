package waa.lab4.bidirectional.manytoone;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class Office {
    @Id
    private Long id;

    private String name;

    @OneToMany(mappedBy = "office")
    private List<Employee> employees;
}
