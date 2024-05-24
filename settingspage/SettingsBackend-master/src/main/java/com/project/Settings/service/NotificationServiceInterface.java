package com.project.Settings.service;

import java.util.Map;

import com.project.Settings.model.Notifications;

public interface NotificationServiceInterface {
	Notifications updateNotifications(Long userId,Notifications notifications);
	
	Notifications getNotifications(Long userId);
	
	Notifications addUser(Notifications notifications);

}
