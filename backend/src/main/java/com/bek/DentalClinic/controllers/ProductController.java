package com.bek.DentalClinic.controllers;

import com.bek.DentalClinic.models.Product;
import com.bek.DentalClinic.services.ProductService;
import com.bek.DentalClinic.viewModels.ProductVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    public Product addProduct(@RequestBody ProductVM product)
    {
        return productService.addProduct(product);
    }

    @GetMapping
    public ResponseEntity<Page<Product>> getAllProducts(
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "1") Integer size,
            @RequestParam(defaultValue = "id") String sortBy
    )
    {
        Page<Product> products=productService.getAllProducts(page,size,sortBy);
        return (products!=null && !products.isEmpty()) ? ResponseEntity.ok(products):ResponseEntity.notFound().build();
    }

//    @GetMapping(path = "{id}")
//    public ResponseEntity<Product> getProduct(@PathVariable Integer id)
//    {
//        Product product=productService.getProduct(id);
//        return (product!=null) ? ResponseEntity.ok(product):ResponseEntity.notFound().build();
//    }

    @GetMapping("/{id}")
    public @ResponseBody ResponseEntity<Product> getProduct(@PathVariable Integer id) {
        var product = productService.getProduct(id);
        return  new ResponseEntity<>(product, HttpStatus.OK);
    }


    @DeleteMapping(path = "id")
    public void deleteProduct(@PathVariable Integer id)
    {
        productService.deleteProduct(id);
    }




}
