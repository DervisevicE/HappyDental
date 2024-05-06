package com.bek.DentalClinic.viewModels;

import com.bek.DentalClinic.enums.Gender;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;


@Data
@AllArgsConstructor
public class PatientVM {
    private LocalDate birthdate;

    private String city;

    private Gender gender;

    private String address;

    private String phoneNumber;

    private Integer userId;
}
