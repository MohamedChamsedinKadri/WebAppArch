package waa.lab4.unidirectional.manytoone2;


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
public class Reservation {
    @Id
    private Long id;

    private String number;

    @ManyToOne
    private Book book;
}
