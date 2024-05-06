package com.bek.DentalClinic.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "doctor")
@Data
@NoArgsConstructor
public class Doctor {

    @Id
    @GeneratedValue
    private Integer id;

    private String specialization;

    @Column(name = "user_id")
    private Integer userId;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name="user_id",insertable = false,updatable = false)
    private User user;

    @JsonIgnore
    @OneToMany(mappedBy = "doctor")
    private List<Appointment> appointments;

    public Doctor( String specialization,Integer userId) {
        this.specialization = specialization;
        this.userId=userId;
    }

}

