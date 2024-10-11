package waa.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "app_id")
    private long id;
    private String appdate;
    @ManyToOne
    private Patient patient;
    @Embedded
    private Payment payment;
    @ManyToOne
    private Doctor doctor;

}
