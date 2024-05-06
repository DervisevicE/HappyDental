package com.bek.DentalClinic.viewModels;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class OrderVM {
    private LocalDateTime orderDateTime;
    private Integer quantityOrdered;
    private Integer productId;
    private Integer userId;

}
