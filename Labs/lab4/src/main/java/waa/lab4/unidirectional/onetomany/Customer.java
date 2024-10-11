package waa.lab4.unidirectional.onetomany;


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
public class Customer {
    @Id
    private Long id;

    private String name;

    @OneToMany
    private List<Reservation> reservations;
}
