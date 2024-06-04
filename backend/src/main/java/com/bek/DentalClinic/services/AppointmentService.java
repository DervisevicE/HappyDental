package com.bek.DentalClinic.services;

import com.bek.DentalClinic.models.Appointment;
import com.bek.DentalClinic.repositories.AppointmentRepository;
import com.bek.DentalClinic.viewModels.AppointmentVM;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    AppointmentRepository appointmentRepository;

    public Appointment addAppointment(AppointmentVM appointment)
    {
        return appointmentRepository.save(
                new Appointment(appointment.getAppointmentDateTime(),appointment.getPatientId(), appointment.getDoctorId())
        );
    }

    public Page<Appointment> getAppointmentsForPatient(Integer patientId,Integer page,Integer size, String sortBy)
    {
        Pageable pageable=PageRequest.of(page,size,Sort.by(sortBy));
        Page<Appointment> appointments=appointmentRepository.findAllByPatientId(patientId,pageable);
        return appointments;
    }

    public Page<Appointment> getAppointmentsForDoctor(Integer doctorId,Integer page,Integer size,String sortBy)
    {
        Pageable pageable= PageRequest.of(page,size, Sort.by(sortBy));
        Page<Appointment> appointments=appointmentRepository.findAllByDoctorId(doctorId,pageable);
        return appointments;
    }
    public Appointment getAppointment(Integer id)
    {
        return appointmentRepository.findById(id).orElse(null);
    }
    public void deleteAppointment(Integer id)
    {
        appointmentRepository.deleteById(id);
    }

    public List<Appointment> getDoctorAppointments(Integer doctorId) {
        List<Appointment> appointments = appointmentRepository.findByDoctorId(doctorId);
        if (appointments.isEmpty()) {
            throw new EntityNotFoundException("No appointments found for doctor with ID " + doctorId);
        }
        return appointments;
    }

    public List<Appointment> getPatientAppointments(Integer patientId) {
        List<Appointment> appointments = appointmentRepository.findByPatientId(patientId);
        if (appointments.isEmpty()) {
            throw new EntityNotFoundException("No appointments found for patient with ID " + patientId);
        }
        return appointments;
    }
}
