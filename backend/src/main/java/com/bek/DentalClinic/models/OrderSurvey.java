package com.bek.DentalClinic.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "order_surveys")
@Data
@NoArgsConstructor
public class OrderSurvey {

    @Id
    @GeneratedValue
    private Integer id;

    @Column(name = "order_id")
    private Integer orderId;

    @Column(name = "order_grade")
    private int orderGrade;

    @Column(name = "order_comment")
    private String orderComment;

    public OrderSurvey(Integer orderId, int orderGrade, String orderComment) {
        this.orderId = orderId;
        this.orderGrade = orderGrade;
        this.orderComment = orderComment;
    }
}
