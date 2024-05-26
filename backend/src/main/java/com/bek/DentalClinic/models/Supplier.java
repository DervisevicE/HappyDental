package com.bek.DentalClinic.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "suppliers")
public class Supplier {
    @Id
    @GeneratedValue
    private Integer id;

    private String supplierName;

    public Supplier(){}

    public Supplier(String supplierName) {
        this.supplierName = supplierName;
    }

    public Integer getId() {
        return id;
    }

    public String getSupplierName() {
        return supplierName;
    }
}
