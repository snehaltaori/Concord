package com.concord.backend;

import com.concord.backend.calendar.model.EventModel;
import com.concord.backend.calendar.repository.CalendarRepository;
import com.concord.backend.config.AppConstants;
import com.concord.backend.models.Role;
import com.concord.backend.repositories.RoleRepo;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.io.InputStream;
import java.util.List;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleRepo roleRepo;

    @Autowired
    private CalendarRepository calendarRepo;

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

//            if(calendarRepo.count() == 0) {
            if(calendarRepo.count() == 0) {
                try{

                    // Load the JSON data from a file
                    Resource resource = new ClassPathResource("/JSON/calendar.json");
                    InputStream inputStream = resource.getInputStream();

                    // Convert the JSON data to a list of CalendarEvent objects
                    ObjectMapper objectMapper = new ObjectMapper();
                    List<EventModel> calendarEvents = objectMapper.readValue(inputStream, new TypeReference<List<EventModel>>() {});

                    // Save the CalendarEvent objects to the database
                    calendarRepo.saveAll(calendarEvents);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            } else {
                System.out.println("Calendar events already exist. Skipping creation.");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
