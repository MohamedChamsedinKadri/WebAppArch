package waa.services;

import waa.models.Customer;

import java.util.List;

public interface CustomerService {

    public Customer save(Customer customer);

    public List<Customer> getAllCustomers();
}
