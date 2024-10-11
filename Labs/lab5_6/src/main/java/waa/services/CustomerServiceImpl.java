package waa.services;

import edu.miu.cs.cs545.waalab5.models.*;
import waa.repositories.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import waa.models.Customer;

import java.util.List;
@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService{
    private final CustomerRepository customerRepository;

    @Override
    public Customer save(Customer customer) {
        //Customer customer1=new Customer("Jean", "Francis", List.of(new Order(LocalDate.of(2020,10,23), customer, List.of(new OrderLine(22, new Book("Math 0", "learning Math", "Math yes") )))));
        return customerRepository.save(customer);
    }
    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }
}
