package com.bek.DentalClinic.services;

import com.bek.DentalClinic.models.Order;
import com.bek.DentalClinic.repositories.OrderRepository;
import com.bek.DentalClinic.viewModels.OrderVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order addOrder(OrderVM order)
    {
        return orderRepository.save(
                new Order(
                        order.getOrderDateTime(),
                        order.getQuantityOrdered(),
                        order.getProductId(),
                        order.getUserId()
                )
        );
    }

    public Page<Order> getAllOrders(Integer page,Integer size,String sortBy)
    {
        Pageable pageable= PageRequest.of(page,size, Sort.by(sortBy));
        Page<Order> orders=orderRepository.findAll(pageable);
        return orders;
    }
    public Order getOrder(Integer id)
    {
        return orderRepository.findById(id).orElse(null);
    }
    public void deleteOrder(Integer id)
    {
        orderRepository.deleteById(id);
    }
}
