package com.bek.DentalClinic.services;

import com.bek.DentalClinic.models.Patient;
import com.bek.DentalClinic.repositories.PatientRepository;
import com.bek.DentalClinic.viewModels.PatientVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class PatientService {
    @Autowired
    private PatientRepository patientRepository;

    public Patient addPatient(PatientVM patient)
    {
        return patientRepository.save(
                new Patient(
                        patient.getBirthdate(),
                        patient.getCity(),
                        patient.getGender(),
                        patient.getAddress(),
                        patient.getPhoneNumber(),
                        patient.getUserId()
                )
        );
    }

    public Page<Patient> getAllPatients(Integer page,Integer size,String sortBy)
    {
        Pageable pageable= PageRequest.of(page,size, Sort.by(sortBy));
        Page<Patient> patients=patientRepository.findAll(pageable);
        return patients;
    }

    public Patient getPatient(Integer id)
    {
        return patientRepository.findById(id).orElse(null);
    }

    public void deletePatient(Integer id)
    {
        patientRepository.deleteById(id);
    }
}
