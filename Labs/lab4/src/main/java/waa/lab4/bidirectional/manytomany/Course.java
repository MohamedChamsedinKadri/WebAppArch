package waa.lab4.bidirectional.manytomany;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class Course {
    @Id
    private Long id;

    private String name;

    @ManyToMany
    private List<Student> students;
}
