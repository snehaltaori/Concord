package com.project.Settings.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Settings.model.Notifications;

@Repository
public interface NotificationRepository extends JpaRepository<Notifications, Long> {

}
