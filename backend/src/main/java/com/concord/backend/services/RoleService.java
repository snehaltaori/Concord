package com.concord.backend.services;

import com.concord.backend.models.Role;
import com.concord.backend.payloads.RoleDto;

import java.util.Optional;

public interface RoleService {
    RoleDto createRole(RoleDto role);
    RoleDto getRoleById(Integer roleId);
    Optional<RoleDto> getRoleByName(String roleName);
    void deleteRole(Integer roleId);
    void deleteAllRoles();
}
