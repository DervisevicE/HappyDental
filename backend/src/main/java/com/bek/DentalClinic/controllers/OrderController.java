package com.bek.DentalClinic.controllers;

import com.bek.DentalClinic.models.Order;
import com.bek.DentalClinic.models.OrderSurvey;
import com.bek.DentalClinic.models.Supplier;
import com.bek.DentalClinic.services.OrderService;
import com.bek.DentalClinic.viewModels.OrderVM;
import com.bek.DentalClinic.viewModels.SupplierVM;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

//    @PostMapping
//    public Order addOrder(@RequestBody OrderVM order)
//    {
//        return orderService.addOrder(order);
//    }

    @GetMapping
    public ResponseEntity<Page<Order>> getAllOrders(
            @RequestParam (defaultValue = "0") Integer page,
            @RequestParam (defaultValue = "5") Integer size,
            @RequestParam (defaultValue = "id") String sortBy
    )
    {
        Page<Order> orders=orderService.getAllOrders(page,size,sortBy);
        return (orders!=null && !orders.isEmpty()) ? ResponseEntity.ok(orders):ResponseEntity.notFound().build();
    }

    @GetMapping("/all")
    public @ResponseBody ResponseEntity<List<Order>> getAllOrders() {
        var orders = orderService.getAll();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<Order> getOrder(@PathVariable Integer id)
    {
        Order order=orderService.getOrder(id);
        return (order!=null) ? ResponseEntity.ok(order):ResponseEntity.notFound().build();
    }

    @DeleteMapping(path = "{id}")
    public void deleteOrder(@PathVariable Integer id)
    {
        orderService.deleteOrder(id);
    }
    @PutMapping(path = "{id}/confirm")
    public ResponseEntity<String> confirmOrder(@PathVariable Integer id) {
        boolean isOrderFound=orderService.confirmOrder(id);
        if (isOrderFound) {
            return ResponseEntity.ok("Order confirmed sucessfully!");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping(path = "{id}/cancel")
    public ResponseEntity<String> cancelOrder(@PathVariable Integer id)
    {
        boolean isOrderCanceled=orderService.cancelOrder(id);
        if(isOrderCanceled)
        {
            return ResponseEntity.ok("Order canceled sucessfully!");
        }
        else
        {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping(path = "{orderId}/survey")
    public ResponseEntity<String> createOrderSurvey(
            @PathVariable Integer orderId,
            @RequestParam int grade,
            @RequestParam String comment
    ) {
        try {
            orderService.createOrderSurvey(orderId, grade, comment);
            return ResponseEntity.ok("Order survey created successfully!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(path = "surveys")
    public ResponseEntity<List<OrderSurvey>> getAllOrderSurveys() {
        List<OrderSurvey> orderSurveys = orderService.getAllOrderSurveys();
        return ResponseEntity.ok(orderSurveys);
    }

    @GetMapping(path = "/canceled")
    public ResponseEntity<List<Order>> getCanceledOrders()
    {
        List<Order> orders=orderService.getCanceledOrders();
        return (!orders.isEmpty()) ? ResponseEntity.ok(orders):ResponseEntity.notFound().build();
    }

    @GetMapping(path = "/confirmed")
    public ResponseEntity<List<Order>> getConfirmedOrders()
    {
        List<Order> orders=orderService.getConfirmedOrders();
        return (!orders.isEmpty()) ? ResponseEntity.ok(orders):ResponseEntity.notFound().build();
    }

    @PostMapping(path = "/suppliers")
    public Supplier addSupplier(@RequestBody SupplierVM supplier)
    {
        return orderService.addSupplier(supplier);
    }

    @GetMapping(path = "/suppliers")
    public ResponseEntity<Page<Supplier>> getSuppliers(
        @RequestParam (defaultValue = "0") Integer page,
        @RequestParam (defaultValue = "1") Integer size,
        @RequestParam (defaultValue = "id") String sortBy
        )
    {
        Page<Supplier> suppliers=orderService.getSuppliers(page,size,sortBy);
        return (suppliers!=null && !suppliers.isEmpty()) ? ResponseEntity.ok(suppliers):ResponseEntity.notFound().build();
    }

//    @PostMapping("/add")
//    @ResponseStatus(HttpStatus.CREATED)
//    public @ResponseBody ResponseEntity<Order> addOrder(@RequestBody Integer productId, @RequestBody Integer quantityAvailable) {
//        var newAppointment = orderService.addOrderByProductId(productId, quantityAvailable);
//        return new ResponseEntity<>(newAppointment, HttpStatus.CREATED);
//    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public @ResponseBody ResponseEntity<Order> addOrder(@RequestBody OrderVM order) {
        var newAppointment = orderService.addOrderByProductId(order);
        return new ResponseEntity<>(newAppointment, HttpStatus.CREATED);
    }


}
