package com.bek.DentalClinic.controllers;

import com.bek.DentalClinic.models.Patient;
import com.bek.DentalClinic.services.PatientService;
import com.bek.DentalClinic.viewModels.PatientVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @PostMapping
    public Patient addPatient(@RequestBody PatientVM patient)
    {
        return patientService.addPatient(patient);
    }

    @GetMapping
    public ResponseEntity<Page<Patient>> getAllPatient(
            @RequestParam (defaultValue = "0") Integer page,
            @RequestParam (defaultValue = "1") Integer size,
            @RequestParam (defaultValue = "id") String sortBy
    )
    {
        Page<Patient> patients=patientService.getAllPatients(page,size,sortBy);
        return (patients!=null && !patients.isEmpty()) ? ResponseEntity.ok(patients):ResponseEntity.notFound().build();
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<Patient> getPatient(@PathVariable Integer id)
    {
        Patient patient=patientService.getPatient(id);
        return (patient!=null) ? ResponseEntity.ok(patient):ResponseEntity.notFound().build();
    }


    @DeleteMapping(path = "{id}")
    public void deletePatient(@PathVariable  Integer id)
    {
        patientService.deletePatient(id);
    }
}
