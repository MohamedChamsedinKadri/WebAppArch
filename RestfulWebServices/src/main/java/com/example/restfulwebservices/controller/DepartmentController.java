package com.example.restfulwebservices.controller;

import com.example.restfulwebservices.entity.Department;
import com.example.restfulwebservices.service.DepartmentService;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DepartmentController {
    @Autowired private DepartmentService departmentService;

    //save Operation
    @PostMapping("/departments")
    public Department saveDepartment(@Valid @RequestBody Department department) {
        return departmentService.saveDepartment(department);
    }

    //read Operation
    @GetMapping("/department")
    public List<Department> fetshDepartmentList() {
        return departmentService.fetshDepartmentList();

    }

    //update operation
    @PutMapping
    public Department updateDepartment(@RequestBody Department department, @PathVariable("id") long id) {
        return departmentService.updateDepartment(department , Id);
    }
    //delete operation
    @DeleteMapping
    public void deleteDepartmentById(@PathVariable("id") long id) {
        departmentService.deleteDepartment(Id);
        return "Deleted Successfully";
    }

}
