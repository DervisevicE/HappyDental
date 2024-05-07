package com.bek.DentalClinic.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name="orders")
@Data
@NoArgsConstructor
public class Order {

    @Id
    @GeneratedValue
    private Integer id;
    private LocalDateTime orderDateTime;
    private Integer quantityOrdered;

    @Column(name="product_id")
    private Integer productId;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="product_id",insertable = false,updatable = false)
    private Product product;

    @Column(name="user_id")
    private Integer userId;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="user_id",insertable=false,updatable=false)
    private User user;

    public Order(LocalDateTime orderDateTime,Integer quantityOrdered,Integer productId,Integer userId)
    {
        this.orderDateTime=orderDateTime;
        this.productId=productId;
        this.quantityOrdered=quantityOrdered;
        this.userId=userId;
    }

}
