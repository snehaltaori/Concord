package com.springboot.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.web.Repository.StudentRepository;
import com.springboot.web.model.Student;

@Service
public abstract class StudentServiceImpl implements StudentsService {
	@Autowired
	 private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
	
	

}
