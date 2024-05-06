package com.bek.DentalClinic.viewModels;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class AppointmentVM {
    private LocalDateTime appointmentDateTime;
    private Integer doctorId;
    private Integer patientId;
}
