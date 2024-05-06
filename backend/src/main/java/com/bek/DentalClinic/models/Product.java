package com.bek.DentalClinic.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue
    private Integer id;
    private String productName;
    private String description;
    private Integer unitPrice;
    private Integer quantityAvailable;

    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<Order> orders;

    public Product(String productName, String description, Integer unitPrice, Integer quantityAvailable)
    {
        this.productName=productName;
        this.description=description;
        this.unitPrice=unitPrice;
        this.quantityAvailable=quantityAvailable;
    }
}
