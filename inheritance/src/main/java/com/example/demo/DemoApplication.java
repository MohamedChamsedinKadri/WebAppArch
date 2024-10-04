package com.example.demo;

import com.example.demo.entity.Customer;
import com.example.demo.entity.Order;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.OrderRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;



@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CustomerRepository customerRepo, OrderRepository orderRepo) {
		return args -> {
			// Sample Data
			Customer customer = new Customer();
			customer.setName("John Doe");
			customerRepo.save(customer);

			Order order = new Order();
			order.setDescription("First Order");
			order.setCustomer(customer);
			orderRepo.save(order);

			System.out.println("Sample data initialized.");
		};
	}
}