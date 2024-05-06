package com.bek.DentalClinic.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "appointment")
@Data
@NoArgsConstructor
public class Appointment {
    @Id
    @GeneratedValue
    private Integer id;
    private LocalDateTime appointmentDateTime;

    @Column(name="doctor_id")
    private Integer doctorId;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="doctor_id",insertable = false,updatable = false)
    private Doctor doctor;

    @Column(name="patient_id")
    private Integer patientId;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="patient_id",insertable = false,updatable = false)
    private Patient patient;

    public Appointment(LocalDateTime appointmentDateTime,Integer patientId,Integer doctorId)
    {
        this.appointmentDateTime=appointmentDateTime;
        this.patientId=patientId;
        this.doctorId=doctorId;
    }

}
