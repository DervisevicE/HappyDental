package com.bek.DentalClinic.repositories;

import com.bek.DentalClinic.models.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SupplierRepository extends JpaRepository<Supplier,Integer> {
}
