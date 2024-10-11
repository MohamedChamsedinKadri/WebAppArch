package waa.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@SecondaryTables(@SecondaryTable(name = "address", pkJoinColumns = {@PrimaryKeyJoinColumn(name = "patient_id", referencedColumnName = "id")}))
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(table = "address")
    private String street;
    @Column(table = "address")
    private String zip;
    @Column(table = "address")
    private String city;
}
