package com.project.Settings.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Notifications {
	
	@Id
	@GeneratedValue
	private Long userId;
	
	private Boolean meetings;
	
	private Boolean deadlines;
	
	private Boolean exams;
	
	private Boolean clubActivities;
	
	private Boolean tournaments;
	
	private Boolean doNotDisturb;

	public Long getUserId() {
		return userId;
	}

	public Boolean getMeetings() {
		return meetings;
	}

	public Boolean getDeadlines() {
		return deadlines;
	}

	public Boolean getExams() {
		return exams;
	}

	public Boolean getClubActivities() {
		return clubActivities;
	}

	public Boolean getTournaments() {
		return tournaments;
	}

	public Boolean getDoNotDisturb() {
		return doNotDisturb;
	}

	public void setId(Long userId) {
		this.userId = userId;
	}

	public void setMeetings(Boolean meetings) {
		this.meetings = meetings;
	}

	public void setDeadlines(Boolean deadlines) {
		this.deadlines = deadlines;
	}

	public void setExams(Boolean exams) {
		this.exams = exams;
	}

	public void setClubActivities(Boolean clubActivities) {
		this.clubActivities = clubActivities;
	}

	public void setTournaments(Boolean tournaments) {
		this.tournaments = tournaments;
	}

	public void setDoNotDisturb(Boolean doNotDisturb) {
		this.doNotDisturb = doNotDisturb;
	}

	public Notifications(Long userId, Boolean meetings, Boolean deadlines, Boolean exams, Boolean clubActivities,
			Boolean tournaments, Boolean doNotDisturb) {
		super();
		this.userId = userId;
		this.meetings = meetings;
		this.deadlines = deadlines;
		this.exams = exams;
		this.clubActivities = clubActivities;
		this.tournaments = tournaments;
		this.doNotDisturb = doNotDisturb;
	}

	public Notifications() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
