package com.concord.backend.calendar.service;

import com.concord.backend.calendar.model.EventModel;
import com.concord.backend.calendar.repository.CalendarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CalendarServiceImpl implements CalendarService {
    @Autowired
    private CalendarRepository calendarRepository;

    @Override
    public EventModel createEvent(EventModel eventModel) {
        return this.calendarRepository.save(eventModel);
    }

    public EventModel getEventById(int eventId) {
        return this.calendarRepository.findByEventId(eventId);
    }

    public List<EventModel> getAllEvents() {
        return this.calendarRepository.findAll();
    }

    public EventModel updateEvent(EventModel eventModel) {
        return this.calendarRepository.save(eventModel);
    }

    public void deleteEventById(int userId) {
        calendarRepository.deleteById(userId);
    }

    public void deleteAllEvents() {
        calendarRepository.deleteAll();
    }
}
