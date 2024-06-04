package com.bek.DentalClinic.controllers;

import com.bek.DentalClinic.models.Appointment;
import com.bek.DentalClinic.services.AppointmentService;
import com.bek.DentalClinic.viewModels.AppointmentVM;
import org.springframework.data.domain.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path ="appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping
    public Appointment addAppointment(@RequestBody AppointmentVM appointment)
    {
        return appointmentService.addAppointment(appointment);
    }

    @GetMapping(path = "patient/{patientId}")
    public ResponseEntity<Page<Appointment>> getAllAppointmentsForPatient(
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "1") Integer size,
            @RequestParam(defaultValue = "id") String sortBy,
            @PathVariable Integer patientId
            ){
        Page<Appointment> appointments=appointmentService.getAppointmentsForPatient(patientId,page,size,sortBy);
        return (appointments!=null && !appointments.isEmpty()) ? ResponseEntity.ok(appointments):ResponseEntity.notFound().build();
    }

    @GetMapping(path = "doctor/{doctorId}")
    public ResponseEntity<Page<Appointment>> getAllAppointmentsForDoctor(
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "1") Integer size,
            @RequestParam(defaultValue = "id") String sortBy,
            @PathVariable Integer doctorId
    ){
        Page<Appointment> appointments=appointmentService.getAppointmentsForPatient(doctorId,page,size,sortBy);
        return (appointments!=null && !appointments.isEmpty()) ? ResponseEntity.ok(appointments):ResponseEntity.notFound().build();
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<Appointment> getAppointment(@PathVariable Integer id)
    {
        Appointment appointment=appointmentService.getAppointment(id);
        return (appointment!=null) ? ResponseEntity.ok(appointment):ResponseEntity.notFound().build();
    }
    @DeleteMapping(path = "{id}")
    public void deleteAppointment(@PathVariable Integer id)
    {
        appointmentService.deleteAppointment(id);
    }

    @GetMapping("/getAppsByDid/{doctor_id}")
    public ResponseEntity<List<Appointment>> getDoctorAppointments(@PathVariable Integer doctor_id){
        var appointments = appointmentService.getDoctorAppointments(doctor_id);
        return new ResponseEntity<>(appointments, HttpStatus.OK);
    }

    @GetMapping("/getAppsByPid/{patient_id}")
    public ResponseEntity<List<Appointment>> getPatientAppointments(@PathVariable Integer patient_id){
        var appointments = appointmentService.getPatientAppointments(patient_id);
        return new ResponseEntity<>(appointments, HttpStatus.OK);
    }

}
