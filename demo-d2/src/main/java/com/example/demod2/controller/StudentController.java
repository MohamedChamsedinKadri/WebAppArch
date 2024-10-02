package com.example.demod2.controller;

import com.example.demod2.model.Student;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class StudentController {

    //add Student
    @PostMapping("/students")
    public Student addStudent(@RequestBody Student student) {
        return student;
    }

    @GetMapping("/{studentId}")
    public ResponseEntity<Student> getStudentById(@PathVariable(name = "studentId") int id) {
        System.out.println(id);
        //sudo: search DB
        Student s = null;
        if(id == 2){
            s = new Student(2, "Edward", "Smith", 20);
        }

        if(s != null) {
//            return new ResponseEntity<>(s, HttpStatus.OK);
            return ResponseEntity
                    .ok()
                    .header("Content-Type", "application/json")
                    .body(s);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
