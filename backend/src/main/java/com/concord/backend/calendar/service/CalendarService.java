package com.concord.backend.calendar.service;

import com.concord.backend.calendar.model.EventModel;

import java.util.List;

public interface CalendarService {
    EventModel getEventById(int eventId);
    List<EventModel> getAllEvents();
    EventModel createEvent(EventModel eventModel);
    EventModel updateEvent(EventModel eventModel);
    void deleteEventById(int eventId);
    void deleteAllEvents();
}
