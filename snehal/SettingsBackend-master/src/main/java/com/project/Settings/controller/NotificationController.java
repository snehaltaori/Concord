package com.project.Settings.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.Settings.model.Notifications;
import com.project.Settings.service.NotificationServiceInterface;

@RestController
@CrossOrigin("*")
public class NotificationController {
	
	@Autowired
	private NotificationServiceInterface notificationServiceInterface;
	
	@GetMapping("/test")
	public String testing() {
		return "Test Successful";
	}
	
	@GetMapping("/notifications/{userId}")
	public Notifications getAllNotifications(@PathVariable Long userId) {
		return notificationServiceInterface.getNotifications(userId);
	}
	
	@PatchMapping("/notifications/{userId}")
	public Notifications updateNotifications(@PathVariable Long userId,@RequestBody Notifications notifications) {
		return notificationServiceInterface.updateNotifications(userId,notifications); 
	}
	
	@PostMapping("/notifications")
	public Notifications addUser(@RequestBody Notifications notifications) {
		return notificationServiceInterface.addUser(notifications);
	}
}
