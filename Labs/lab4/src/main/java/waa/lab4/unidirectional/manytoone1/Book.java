package waa.lab4.unidirectional.manytoone1;


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
public class Book {
    @Id
    private Long id;

    private String title;

    @ManyToOne
    private Publisher publisher;
}
