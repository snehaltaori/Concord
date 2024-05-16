package com.concord.backend.controllers;

import com.concord.backend.payloads.RoleDto;
import com.concord.backend.payloads.UserDto;
import com.concord.backend.services.RoleService;
import com.concord.backend.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    private RoleService roleService;

    @PostMapping("/create")
    public ResponseEntity<UserDto> createUser(@Valid @RequestBody UserDto userDto, @RequestParam("roleNames") List<String> roleNames) {
        String hashPwd = passwordEncoder.encode(userDto.getPassword());
        userDto.setPassword(hashPwd);

        Set<RoleDto> userRoles = new HashSet<>();
        for (String roleName : roleNames) {
            roleService.getRoleByName(roleName).ifPresent(userRoles::add);
        }
        userDto.setRoles(userRoles);

        // Save the userDto object, not the RoleDto objects
        UserDto createUserDto = this.userService.createUser(userDto);
        return new ResponseEntity<>(createUserDto, HttpStatus.CREATED);
    }

    // GET - user get
    @GetMapping("/")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        return ResponseEntity.ok(this.userService.getAllUsers());
    }

    // GET - user get
    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> getSingleUser(@PathVariable Integer userId) {
        return ResponseEntity.ok(this.userService.getUserById(userId));
    }
}
