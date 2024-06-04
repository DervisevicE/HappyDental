package com.bek.DentalClinic.models;

import com.bek.DentalClinic.enums.Gender;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "patient")
public class Patient {

    @Id
//    @GeneratedValue
    private Integer id;

    private LocalDate birthdate;

    private String city;

    private Gender gender;

    private String address;

    private String phoneNumber;

    @Column(name = "user_id")
    private Integer userId;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name="user_id",insertable = false,updatable = false)
    private User user;

    @JsonIgnore
    @OneToMany(mappedBy = "patient")
    private List<Appointment> appointments;

    public Patient(LocalDate birthdate, String city,Gender gender, String address, String phoneNumber,Integer userId) {
        this.birthdate = birthdate;
        this.city=city;
        this.gender = gender;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.userId=userId;
    }

    public Patient(Integer id, LocalDate birthdate, String city, Gender gender, String address, String phoneNumber, Integer userId) {
        this.id = id;
        this.birthdate = birthdate;
        this.city = city;
        this.gender = gender;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.userId = userId;
    }
}

