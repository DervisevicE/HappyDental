package com.bek.DentalClinic.services;

import com.bek.DentalClinic.models.Doctor;
import com.bek.DentalClinic.repositories.DoctorRepository;
import com.bek.DentalClinic.viewModels.DoctorVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class DoctorService {
    @Autowired
    DoctorRepository doctorRepository;

    public Doctor addDoctor(DoctorVM doctor)
    {
        return doctorRepository.save(
                new Doctor(doctor.getSpecialization(),
                        doctor.getUserId()
                        )
        );
    }

    public Page<Doctor> getAllDoctors(Integer page,Integer size,String sortBy)
    {
        Pageable pageable= PageRequest.of(page,size, Sort.by(sortBy));
        Page<Doctor> doctors=doctorRepository.findAll(pageable);
        return doctors;
    }

    public Doctor getDoctor(Integer id)
    {
        return doctorRepository.findById(id).orElse(null);
    }

    public void deleteDoctor(Integer id)
    {
        doctorRepository.deleteById(id);
    }

}
