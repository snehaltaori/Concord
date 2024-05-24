package com.springboot.web.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.web.model.Student;
import com.springboot.web.service.StudentsService;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class usrcontroller {

	  @Autowired
	    private StudentsService studentsService;

	    @PostMapping("/add")
	    public String add(@RequestBody Student student){
	        studentsService.saveStudent(student);
	        return "New student is added";
	    }

	    @GetMapping("/getAll")
	    public List<Student> list(){
	        return studentsService.getAllStudent();
	    }
}


