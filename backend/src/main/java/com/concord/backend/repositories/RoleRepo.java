package com.concord.backend.repositories;

import com.concord.backend.models.Role;
import com.concord.backend.models.User;
import com.concord.backend.payloads.RoleDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepo extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(String roleName);
    Role findById(int roleId);
    void deleteById(int roleId);
}
