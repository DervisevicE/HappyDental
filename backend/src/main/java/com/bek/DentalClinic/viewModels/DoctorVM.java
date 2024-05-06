package com.bek.DentalClinic.viewModels;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DoctorVM {
    private String specialization;
    private Integer userId;
}
