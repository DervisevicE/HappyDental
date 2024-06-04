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
//    @GeneratedValue
    private Integer id;
    private String firstName;
    private String lastName;

    @Enumerated(EnumType.STRING)
    private Role role;
    private String email;
    private String password;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Order> orders;

    @JsonIgnore
    @OneToOne(mappedBy = "user")
    private Doctor doctor;

    @JsonIgnore
    @OneToOne(mappedBy = "user")
    private Patient patient;

    public User (String firstName, String lastName,Role role,String email,String password)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.role=role;
        this.email=email;
        this.password=password;
    }

    public User(Integer id, String firstName, String lastName, Role role, String email, String password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.email = email;
        this.password = password;

    }
}
