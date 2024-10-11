package waa.repositories;

import waa.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    public Customer save(Customer customer);
    public List<Customer> findAll();
}
