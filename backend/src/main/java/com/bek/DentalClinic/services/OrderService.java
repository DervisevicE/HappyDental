package com.bek.DentalClinic.services;

import com.bek.DentalClinic.models.Order;
import com.bek.DentalClinic.models.OrderSurvey;
import com.bek.DentalClinic.repositories.OrderRepository;
import com.bek.DentalClinic.repositories.OrderSurveyRepository;
import com.bek.DentalClinic.viewModels.OrderVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderSurveyRepository orderSurveyRepository;

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

    @Transactional
    public boolean confirmOrder(Integer orderId){
        Optional<Order> orderOptional = orderRepository.findById(orderId);
        if (orderOptional.isPresent()) {
            Order order = orderOptional.get();
            order.confirmOrder();
            orderRepository.save(order);
            return true;
        }
        return false;
    }

    @Transactional
    public void createOrderSurvey(Integer orderId, int grade, String comment) {
        Optional<Order> orderOptional = orderRepository.findById(orderId);
        if (orderOptional.isPresent()) {
            Order order = orderOptional.get();
            OrderSurvey orderSurvey = new OrderSurvey(orderId, grade, comment);
            orderSurveyRepository.save(orderSurvey);
        } else {
            throw new IllegalArgumentException("Order with id " + orderId + " not found.");
        }
    }
    public List<OrderSurvey> getAllOrderSurveys() {
        return orderSurveyRepository.findAll();
    }
}
