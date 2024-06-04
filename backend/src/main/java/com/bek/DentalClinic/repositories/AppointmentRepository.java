package com.bek.DentalClinic.repositories;

import com.bek.DentalClinic.models.Appointment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Integer> {

    Page<Appointment> findAllByPatientId(Integer patientId, Pageable pageable);
    Page<Appointment> findAllByDoctorId(Integer doctorId,Pageable pageable);

    List<Appointment> findByDoctorId(Integer doctorId);
    List<Appointment> findByPatientId(Integer patientId);
}
