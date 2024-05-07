package com.bek.DentalClinic.services;

import com.bek.DentalClinic.models.Product;
import com.bek.DentalClinic.repositories.ProductRepository;
import com.bek.DentalClinic.viewModels.ProductVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Product addProduct(ProductVM product)
    {
        return productRepository.save(
                new Product(
                        product.getProductName(),
                        product.getDescription(),
                        product.getUnitPrice(),
                        product.getQuantityAvailable()

                )
        );
    }

    public Page<Product> getAllProducts(Integer page,Integer size,String sortBy)
    {
        Pageable pageable= PageRequest.of(page,size, Sort.by(sortBy));
        Page<Product> products=productRepository.findAll(pageable);
        return products;
    }

    public Product getProduct(Integer id)
    {
        return productRepository.findById(id).orElse(null);
    }

    public void deleteProduct(Integer id)
    {
        productRepository.deleteById(id);
    }
}
