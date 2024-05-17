package com.concord.backend.services;

import com.concord.backend.models.User;
import com.concord.backend.payloads.UserDto;

import java.util.List;

public interface UserService {
    UserDto registerNewUser(UserDto user);
    UserDto createUser(UserDto user);
    UserDto getUserById(Integer userId);
    UserDto getUserByEmail(String email);
    List<UserDto> getAllUsers();
    void deleteUser(Integer userId);
    void deleteAllUsers();
}
