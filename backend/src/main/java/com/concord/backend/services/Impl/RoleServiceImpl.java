package com.concord.backend.services.Impl;

import com.concord.backend.exceptions.ResourceNotFoundException;
import com.concord.backend.models.Role;
import com.concord.backend.payloads.RoleDto;
import com.concord.backend.repositories.RoleRepo;
import com.concord.backend.services.RoleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepo roleRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public RoleDto createRole(RoleDto role) {
        Role newRole = this.dtoToRole(role);
        Role savedRole = this.roleRepo.save(newRole);
        return this.roleToDto(savedRole);
    }

    @Override
    public RoleDto getRoleById(Integer roleId) {
        Role role = this.roleRepo.findById(roleId)
                .orElseThrow(() -> new ResourceNotFoundException("Role", "Id", roleId));
        return this.roleToDto(role);
    }

    @Override
    public Optional<RoleDto> getRoleByName(String roleName) {
        Role role = this.roleRepo.findByName(roleName)
                .orElseThrow(() -> new ResourceNotFoundException("Role", "Name: " + roleName , 0));
        return Optional.ofNullable(this.roleToDto(role));
    }

    @Override
    public void deleteRole(Integer roleId) {
        this.roleRepo.deleteById(roleId);
    }

    @Override
    public void deleteAllRoles() {
        this.roleRepo.deleteAll();
    }

    /* ------------------------------------------------------ */

    public Role dtoToRole(RoleDto roleDto) {
        Role role = this.modelMapper.map(roleDto, Role.class);
        return role;
    }

    public RoleDto roleToDto(Role role) {
        RoleDto roleDto = this.modelMapper.map(role, RoleDto.class);
        return roleDto;
    }

}
