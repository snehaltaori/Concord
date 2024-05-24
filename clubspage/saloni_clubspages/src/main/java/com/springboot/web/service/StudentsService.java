package com.springboot.web.service;

import java.util.List;
import com.springboot.web.service.StudentsService;
import com.springboot.web.model.Student;

public interface StudentsService {
	public Student saveStudent(Student student);
	public List<Student>getAllStudent();
	/*
	 * public Student save(Student student); public List<Student> findAll();
	 */
	public Student save(Student student);
	public List<Student> findAll();
	

}
