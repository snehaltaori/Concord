package com.concord.backend.services;

import com.concord.backend.payloads.UserDto;

import java.util.List;

public interface UserService {
    UserDto registerNewUser(UserDto user);
    UserDto createUser(UserDto user);
    UserDto getUserById(Integer userId);
    List<UserDto> getAllUsers();
    void deleteUser(Integer userId);
    void deleteAllUsers();
}
