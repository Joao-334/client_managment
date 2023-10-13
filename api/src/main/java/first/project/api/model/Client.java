package first.project.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Clients")
@Getter
@Setter

public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long code;

    private String name;

    private int age;

    private String city;
}
