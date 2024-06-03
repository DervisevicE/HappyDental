package com.bek.DentalClinic;

import com.bek.DentalClinic.enums.Role;
import com.bek.DentalClinic.models.Order;
import com.bek.DentalClinic.models.Product;
import com.bek.DentalClinic.models.User;
import com.bek.DentalClinic.repositories.OrderRepository;
import com.bek.DentalClinic.repositories.ProductRepository;
import com.bek.DentalClinic.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class DentalClinicApplication {

	public static void main(String[] args) {
		SpringApplication.run(DentalClinicApplication.class, args);
	}

//	@Bean
//	CommandLineRunner runner(ProductRepository productRepository, OrderRepository orderRepository, UserRepository userRepository) {
//		return args -> {
//			List<Product> products = new ArrayList<>();
//			List<Order> orders = new ArrayList<>();
//			List<User> users = new ArrayList<>();
//
//			// Create sample products manually with realistic data
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
//			products.add(new Product("Gloves", "Disposable latex gloves", 8, 1000));
//			products.add(new Product("Face Masks", "Disposable surgical face masks", 10, 800));
//			products.add(new Product("Dental Bibs", "Disposable dental bibs", 12, 400));
//			products.add(new Product("Syringes", "Disposable syringes", 15, 300));
//			products.add(new Product("Anesthetic", "Local anesthetic cartridges", 30, 100));
//			products.add(new Product("Saliva Ejectors", "Disposable saliva ejectors", 5, 600));
//			products.add(new Product("Prophy Paste", "Fluoride prophy paste", 10, 150));
//			products.add(new Product("Composite Resin", "Light-cure composite resin", 40, 90));
//			products.add(new Product("Bonding Agent", "Dental bonding agent", 25, 130));
//			products.add(new Product("Curing Light", "LED curing light for dental composites", 100, 50));
//
//			productRepository.saveAll(products);
//
//			// Create sample users manually
//			users.add(new User("John", "Doe", Role.DOCTOR, "johndoe", "password"));
//			users.add(new User("Jane", "Smith", Role.PATIENT, "janesmith", "password"));
//			users.add(new User("Emily", "Jones", Role.DOCTOR, "emilyjones", "password"));
//			users.add(new User("Michael", "Brown", Role.ADMIN, "michaelbrown", "password"));
//			users.add(new User("Sarah", "Davis", Role.ADMIN, "sarahdavis", "password"));
//
//			userRepository.saveAll(users);
//
//			// Create sample orders manually
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
//			orders.add(new Order(LocalDateTime.now().minusDays(11), 50, products.get(10).getId(), users.get(0).getId()));
//			orders.add(new Order(LocalDateTime.now().minusDays(12), 60, products.get(11).getId(), users.get(1).getId()));
//			orders.add(new Order(LocalDateTime.now().minusDays(13), 40, products.get(12).getId(), users.get(2).getId()));
//			orders.add(new Order(LocalDateTime.now().minusDays(14), 70, products.get(13).getId(), users.get(3).getId()));
//			orders.add(new Order(LocalDateTime.now().minusDays(15), 10, products.get(14).getId(), users.get(4).getId()));
//			orders.add(new Order(LocalDateTime.now().minusDays(16), 80, products.get(15).getId(), users.get(0).getId()));
//			orders.add(new Order(LocalDateTime.now().minusDays(17), 90, products.get(16).getId(), users.get(1).getId()));
//			orders.add(new Order(LocalDateTime.now().minusDays(18), 20, products.get(17).getId(), users.get(2).getId()));
//			orders.add(new Order(LocalDateTime.now().minusDays(19), 50, products.get(18).getId(), users.get(3).getId()));
//			orders.add(new Order(LocalDateTime.now().minusDays(20), 30, products.get(19).getId(), users.get(4).getId()));
//
//			orderRepository.saveAll(orders);
//		};
//	}
}
