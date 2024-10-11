package waa.lab4.unidirectional.manytoone1;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class Publisher {
    @Id
    private Long id;

    private String name;
}
