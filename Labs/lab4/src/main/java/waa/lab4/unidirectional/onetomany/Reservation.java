package waa.lab4.unidirectional.onetomany;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
}
