package com.concord.backend;

import com.concord.backend.config.AppConstants;
import com.concord.backend.models.Role;
import com.concord.backend.repositories.RoleRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleRepo roleRepo;

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println(this.passwordEncoder.encode("xyz"));

        try {
            if (roleRepo.count() == 0) {
                Role roleAdmin = new Role();
                roleAdmin.setName("ROLE_ADMIN");

                Role roleFaculty = new Role();
                roleFaculty.setName("ROLE_FACULTY");

                Role roleStudent = new Role();
                roleStudent.setName("ROLE_STUDENT");

                // Save roles to the database
                List<Role> roles = List.of(roleAdmin, roleFaculty, roleStudent);
                List<Role> savedRoles = this.roleRepo.saveAll(roles);

                savedRoles.forEach(r -> {
                    System.out.println(r.getName());
                });
            } else {
                System.out.println("Roles already exist. Skipping creation.");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
