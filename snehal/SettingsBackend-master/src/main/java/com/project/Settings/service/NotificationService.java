package com.project.Settings.service;

import java.lang.reflect.Field;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import com.project.Settings.model.Notifications;
import com.project.Settings.repository.NotificationRepository;

@Service
public class NotificationService implements NotificationServiceInterface {
	
	@Autowired
	private NotificationRepository notificationRepository;

	@Override
	public Notifications updateNotifications(Long userId,Notifications notifications) {
		Notifications oldNotifications = notificationRepository.findById(userId).get();
		
		if(notifications.getMeetings()!=null) {
			oldNotifications.setMeetings(notifications.getMeetings());
		}
		if(notifications.getClubActivities()!=null) {
			oldNotifications.setClubActivities(notifications.getClubActivities());
		}
		if(notifications.getDeadlines()!=null) {
			oldNotifications.setDeadlines(notifications.getDeadlines());
		}
		if(notifications.getExams()!=null) {
			oldNotifications.setExams(notifications.getExams());
		}
		if(notifications.getClubActivities()!=null) {
			oldNotifications.setClubActivities(notifications.getClubActivities());
		}
		if(notifications.getTournaments()!=null) {
			oldNotifications.setTournaments(notifications.getTournaments());
		}
		if(notifications.getDoNotDisturb()!=null) {
			oldNotifications.setDoNotDisturb(notifications.getDoNotDisturb());
		}
		
		notificationRepository.save(oldNotifications);
		
		return oldNotifications;
	}

	@Override
	public Notifications getNotifications(Long userId) {
		
		return notificationRepository.findById(userId).get();
	}

	@Override
	public Notifications addUser(Notifications notifications) {
		return notificationRepository.save(notifications);
	}
	
	
}
