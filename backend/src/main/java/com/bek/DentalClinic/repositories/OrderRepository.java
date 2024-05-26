package com.bek.DentalClinic.repositories;

import com.bek.DentalClinic.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    Order findById(int id);

    @Query(value = "SELECT * FROM orders WHERE is_order_canceled=true",nativeQuery = true)
    List<Order> findCanceledOrders();

    @Query(value = "SELECT * FROM orders WHERE is_order_confirmed=true",nativeQuery = true)
    List<Order> findConfirmedOrders();
}
