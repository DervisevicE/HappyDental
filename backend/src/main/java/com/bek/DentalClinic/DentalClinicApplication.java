package com.bek.DentalClinic;

import com.bek.DentalClinic.enums.Gender;
import com.bek.DentalClinic.enums.Role;
import com.bek.DentalClinic.models.*;
import com.bek.DentalClinic.repositories.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class DentalClinicApplication {

	public static void main(String[] args) {
		SpringApplication.run(DentalClinicApplication.class, args);
	}

//	@Bean
//	CommandLineRunner runner(UserRepository userRepository, PatientRepository patientRepository, DoctorRepository doctorRepository, AppointmentRepository appointmentRepository, ProductRepository productRepository, OrderRepository orderRepository) {
//		return args -> {
//			List<User> users = new ArrayList<>();
//			users.add(new User(1, "John", "Doe", Role.PATIENT, "john.doe@example.com", "password"));
//			users.add(new User(2, "Jane", "Smith", Role.PATIENT, "jane.smith@example.com", "password"));
//			users.add(new User(3, "Michael", "Johnson", Role.PATIENT, "michael.johnson@example.com", "password"));
//			users.add(new User(4, "Emily", "Williams", Role.DOCTOR, "emily.williams@example.com", "password"));
//			users.add(new User(5, "David", "Brown", Role.DOCTOR, "david.brown@example.com", "password"));
//			users.add(new User(6, "Jessica", "Jones", Role.DOCTOR, "jessica.jones@example.com", "password"));
//			users.add(new User(7, "Robert", "Taylor", Role.ADMIN, "robert.taylor@example.com", "password"));
//			users.add(new User(8, "Olivia", "Miller", Role.ADMIN, "olivia.miller@example.com", "password"));
//			users.add(new User(9, "William", "Anderson", Role.ADMIN, "william.anderson@example.com", "password"));
//			users.add(new User(10, "Sophia", "Martinez", Role.PATIENT, "sophia.martinez@example.com", "password"));
//			userRepository.saveAll(users);
//
//			List<Patient> patients = new ArrayList<>();
//			patients.add(new Patient(1, LocalDate.of(1990, 1, 1), "New York", Gender.Male, "123 Main St", "123456789", 1));
//			patients.add(new Patient(2, LocalDate.of(1985, 5, 15), "Los Angeles", Gender.Female, "456 Elm St", "987654321", 2));
//			patients.add(new Patient(3, LocalDate.of(1988, 8, 20), "Chicago", Gender.Male, "789 Oak St", "456123789", 3));
//			patients.add(new Patient(4, LocalDate.of(1992, 12, 5), "Houston", Gender.Female, "321 Pine St", "987123654", 10));
//			patients.add(new Patient(5, LocalDate.of(1978, 3, 10), "Miami", Gender.Male, "654 Maple St", "321987654", 10));
//			patients.add(new Patient(6, LocalDate.of(1982, 6, 25), "Denver", Gender.Female, "987 Birch St", "654789123", 10));
//			patients.add(new Patient(7, LocalDate.of(1975, 9, 30), "Seattle", Gender.Male, "147 Walnut St", "987654123", 10));
//			patients.add(new Patient(8, LocalDate.of(1995, 11, 12), "Boston", Gender.Female, "258 Cedar St", "123987456", 10));
//			patients.add(new Patient(9, LocalDate.of(1989, 4, 18), "San Francisco", Gender.Male, "369 Elm St", "789654321", 10));
//			patients.add(new Patient(10, LocalDate.of(1987, 7, 7), "Phoenix", Gender.Female, "741 Oak St", "456789123", 10));
//			patientRepository.saveAll(patients);
//
//			List<Doctor> doctors = new ArrayList<>();
//			doctors.add(new Doctor(11, "Dentist", 4));
//			doctors.add(new Doctor(12, "Orthodontist", 5));
//			doctors.add(new Doctor(13, "Surgeon", 6));
//			doctors.add(new Doctor(14, "Endodontist", 4));
//			doctors.add(new Doctor(15, "Periodontist", 5));
//			doctors.add(new Doctor(16, "Pediatric Dentist", 6));
//			doctors.add(new Doctor(17, "Prosthodontist", 4));
//			doctors.add(new Doctor(18, "Oral Pathologist", 5));
//			doctors.add(new Doctor(19, "Oral Radiologist", 6));
//			doctors.add(new Doctor(20, "Cosmetic Dentist", 4));
//			doctorRepository.saveAll(doctors);
//
//			List<Appointment> appointments = new ArrayList<>();
//			appointments.add(new Appointment(21, LocalDateTime.now(), 11, 1));
//			appointments.add(new Appointment(22, LocalDateTime.now(), 12, 2));
//			appointments.add(new Appointment(23, LocalDateTime.now(), 13, 3));
//			appointments.add(new Appointment(24, LocalDateTime.now(), 14, 4));
//			appointments.add(new Appointment(25, LocalDateTime.now(), 15, 5));
//			appointments.add(new Appointment(26, LocalDateTime.now(), 16, 6));
//			appointments.add(new Appointment(27, LocalDateTime.now(), 17, 7));
//			appointments.add(new Appointment(28, LocalDateTime.now(), 18, 8));
//			appointments.add(new Appointment(29, LocalDateTime.now(), 19, 9));
//			appointments.add(new Appointment(30, LocalDateTime.now(), 20, 10));
//			appointments.add(new Appointment(31, LocalDateTime.now(), 11, 2));
//			appointments.add(new Appointment(32, LocalDateTime.now(), 11, 3));
//			appointmentRepository.saveAll(appointments);
//
//			List<Product> products = new ArrayList<>();
//			products.add(new Product("Dental Floss", "Waxed dental floss, mint flavor", 10, 150));
//			products.add(new Product("Toothpaste", "Fluoride toothpaste for sensitive teeth", 5, 300));
//			products.add(new Product("Mouthwash", "Antiseptic mouthwash", 8, 200));
//			products.add(new Product("Toothbrush", "Soft-bristle toothbrush", 3, 500));
//			products.add(new Product("Dental Picks", "Disposable dental picks", 15, 100));
//			products.add(new Product("Teeth Whitening Kit", "At-home teeth whitening kit", 50, 75));
//			products.add(new Product("Orthodontic Wax", "Orthodontic wax for braces", 7, 120));
//			products.add(new Product("Dental Mirror", "Stainless steel dental mirror", 12, 80));
//			products.add(new Product("Dental Scaler", "Professional stainless steel dental scaler", 20, 60));
//			products.add(new Product("Gauze Pads", "Sterile gauze pads", 5, 250));
//			productRepository.saveAll(products);
//
//			List<Order> orders = new ArrayList<>();
//			orders.add(new Order(LocalDateTime.now().minusDays(1), 30, products.get(0).getId(), users.get(0).getId()));
//			orders.add(new Order(LocalDateTime.now().minusDays(2), 50, products.get(1).getId(), users.get(1).getId()));
//			orders.add(new Order(LocalDateTime.now().minusDays(3), 20, products.get(2).getId(), users.get(2).getId()));
//			orders.add(new Order(LocalDateTime.now().minusDays(4), 60, products.get(3).getId(), users.get(3).getId()));
//			orders.add(new Order(LocalDateTime.now().minusDays(5), 10, products.get(4).getId(), users.get(4).getId()));
//			orders.add(new Order(LocalDateTime.now().minusDays(6), 40, products.get(5).getId(), users.get(0).getId()));
//			orders.add(new Order(LocalDateTime.now().minusDays(7), 80, products.get(6).getId(), users.get(1).getId()));
//			orders.add(new Order(LocalDateTime.now().minusDays(8), 70, products.get(7).getId(), users.get(2).getId()));
//			orders.add(new Order(LocalDateTime.now().minusDays(9), 20, products.get(8).getId(), users.get(3).getId()));
//			orders.add(new Order(LocalDateTime.now().minusDays(10), 30, products.get(9).getId(), users.get(4).getId()));
//			orderRepository.saveAll(orders);
//		};
//	}
}
