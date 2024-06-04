package com.bek.DentalClinic.repositories;

import com.bek.DentalClinic.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PatientRepository extends JpaRepository<Patient,Integer> {

    Optional<Patient> findByUserId(Integer userId);
}
