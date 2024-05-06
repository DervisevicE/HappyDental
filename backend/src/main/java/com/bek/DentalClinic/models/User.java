package com.bek.DentalClinic.models;

import com.bek.DentalClinic.enums.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.aspectj.weaver.ast.Or;

import java.util.List;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue
    private Integer id;
    private String firstName;
    private String lastName;
    private Role role;
    private String email;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Order> orders;

    @JsonIgnore
    @OneToOne(mappedBy = "user")
    private Doctor doctor;

    @JsonIgnore
    @OneToOne(mappedBy = "user")
    private Patient patient;

    public User (String firstName, String lastName,Role role,String email)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.role=role;
        this.email=email;
    }
}
