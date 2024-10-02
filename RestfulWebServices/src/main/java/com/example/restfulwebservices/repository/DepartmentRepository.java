package com.example.restfulwebservices.repository;

import com.example.restfulwebservices.entity.Department;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DepartmentRepository extends CrudRepository<Department, long> {
}
