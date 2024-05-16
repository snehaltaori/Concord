package com.concord.backend.calendar.repository;

import com.concord.backend.calendar.model.EventModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CalendarRepository extends JpaRepository<EventModel, Integer>{
    EventModel findByEventId(int eventId);
//    List<EventModel> findAll();
}
