package com.bek.DentalClinic.viewModels;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
public class ProductVM {
    private String productName;
    private String description;
    private Integer unitPrice;
    private Integer quantityAvailable;
}
