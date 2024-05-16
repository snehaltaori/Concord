package com.concord.backend.controllers;

import com.concord.backend.payloads.RoleDto;
import com.concord.backend.services.RoleService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/roles")
public class RoleController {
    @Autowired
    private RoleService roleService;

    @PostMapping("/create")
    public ResponseEntity<RoleDto> createRole(@Valid @RequestBody RoleDto roleDto) {
        RoleDto createRoleDto = this.roleService.createRole(roleDto);
        return new ResponseEntity<>(createRoleDto, HttpStatus.CREATED);
    }

    // GET - role get by id
    @GetMapping("/{roleId}")
    public ResponseEntity<RoleDto> getSingleRole(@PathVariable Integer roleId) {
        return ResponseEntity.ok(this.roleService.getRoleById(roleId));
    }

    // GET - role get by name
    @GetMapping("/name/{roleName}")
    public ResponseEntity<Optional<RoleDto>> getSingleRoleByName(@PathVariable String roleName) {
        return ResponseEntity.ok(this.roleService.getRoleByName(roleName));
    }

    // DELETE - role delete
    @DeleteMapping("/{roleId}")
    public ResponseEntity<String> deleteRole(@PathVariable Integer roleId) {
        this.roleService.deleteRole(roleId);
        return new ResponseEntity<>("Role deleted successfully", HttpStatus.OK);
    }

    // DELETE - delete all
    @DeleteMapping("/")
    public ResponseEntity<String> deleteAllRoles() {
        this.roleService.deleteAllRoles();
        return new ResponseEntity<>("All roles deleted successfully", HttpStatus.OK);
    }
}
