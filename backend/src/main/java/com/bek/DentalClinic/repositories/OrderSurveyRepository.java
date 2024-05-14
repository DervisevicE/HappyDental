package com.bek.DentalClinic.repositories;

import com.bek.DentalClinic.models.Order;
import com.bek.DentalClinic.models.OrderSurvey;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderSurveyRepository extends JpaRepository<OrderSurvey, Integer> {
}
