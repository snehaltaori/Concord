package com.springboot.web.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.web.model.Student;
@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

}
