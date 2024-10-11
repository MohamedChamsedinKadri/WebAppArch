package waa.controllers;

import waa.models.Customer;
import waa.services.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerService customerService;
    @PostMapping
    public Customer saveCustomer(@RequestBody Customer customer){
        return customerService.save(customer);
    }
    @GetMapping
    public List<Customer> getCustomers(){
        return customerService.getAllCustomers();
    }
}
