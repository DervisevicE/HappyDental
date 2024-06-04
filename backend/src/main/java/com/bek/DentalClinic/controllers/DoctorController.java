package com.bek.DentalClinic.controllers;

import com.bek.DentalClinic.models.Doctor;
import com.bek.DentalClinic.services.DoctorService;
import com.bek.DentalClinic.viewModels.DoctorVM;
import jakarta.persistence.GeneratedValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="doctors")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping
    public Doctor addDoctor(@RequestBody DoctorVM doctor)
    {
        return doctorService.addDoctor(doctor);
    }

    @GetMapping
    public ResponseEntity<Page<Doctor>> getAllDoctors(
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "3") Integer size,
            @RequestParam(defaultValue = "id") String sortBy
    )
    {
        Page<Doctor> doctors=doctorService.getAllDoctors(page,size,sortBy);
        return (doctors!=null && !doctors.isEmpty()) ? ResponseEntity.ok(doctors):ResponseEntity.notFound().build();
    }

    @GetMapping(path="{id}")
    public ResponseEntity<Doctor> getDoctor(@PathVariable Integer id)
    {
        Doctor doctor=doctorService.getDoctor(id);
        return (doctor!=null) ? ResponseEntity.ok(doctor):ResponseEntity.notFound().build();
    }

    @DeleteMapping(path="{id}")
    public void deleteDoctor(@PathVariable Integer id)
    {
        doctorService.deleteDoctor(id);
    }

}
