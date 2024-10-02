package com.example.restfulwebservices.service;

import com.example.restfulwebservices.entity.Department;

import java.util.List;

public interface DepartmentService {

    //save operation
    Department saveDepartment(Department department);

    //ReadOperation
    List<Department> fetshDepartmentList();

    //UpdateOperation
    Department updateDepartment(Department department,Long id);

    //deletOperation
    void deleteDepartment(Long id);
}
