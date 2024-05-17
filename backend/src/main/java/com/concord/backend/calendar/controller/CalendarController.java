package com.concord.backend.calendar.controller;

import com.concord.backend.calendar.model.EventModel;
import com.concord.backend.calendar.service.CalendarService;
import com.concord.backend.payloads.APIReturnModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Vector;

@RestController
@RequestMapping("/api/v1/calendar")
public class CalendarController {
    @Autowired
    CalendarService calendarService;
    APIReturnModel apiReturnModel;
    private Vector<EventModel> eventsVec;

    @PostMapping("/")
    public ResponseEntity<?> createEvent(@RequestBody EventModel eventModel) {
        apiReturnModel = new APIReturnModel();
        eventsVec = new Vector<>();
        try {
            EventModel event = this.calendarService.createEvent(eventModel);
            eventsVec.add(event);

            apiReturnModel.setStatus("success");
            apiReturnModel.setMessage("Event Created Successfully");
            apiReturnModel.setData(eventsVec);
            apiReturnModel.setCount(eventsVec.size());
        } catch (Exception e) {
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage(e.getMessage());
            apiReturnModel.setCount(0);

        }
        return ResponseEntity.ok(apiReturnModel);
    }

    @GetMapping("/")
    public ResponseEntity<?> getAllUsers() {
        apiReturnModel = new APIReturnModel();
        try {
            List<EventModel> allEvents = this.calendarService.getAllEvents();
            eventsVec = new Vector<>(allEvents);

            apiReturnModel.setStatus("Success");
            apiReturnModel.setMessage("All events retrieved");
            apiReturnModel.setCount(eventsVec.size());
            apiReturnModel.setData(eventsVec);
        } catch (Exception e) {
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage("Something went Wrong !!");
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok(apiReturnModel);
    }

    // Post Multiple Events

    @PostMapping("/multiple")
//    @PostMapping("/")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_FACULTY')")
    public ResponseEntity<?> createMultipleEvents(@RequestBody List<EventModel> eventModelList) {
        apiReturnModel = new APIReturnModel();
        eventsVec = new Vector<>();
        try {
            for (EventModel eventModel : eventModelList) {
                EventModel event = this.calendarService.createEvent(eventModel);
                eventsVec.add(event);
            }

            apiReturnModel.setStatus("success");
            apiReturnModel.setMessage("Events Created Successfully");
            apiReturnModel.setData(eventsVec);
            apiReturnModel.setCount(eventsVec.size());
        } catch (Exception e) {
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage(e.getMessage());
            apiReturnModel.setCount(0);

        }
        return ResponseEntity.ok(apiReturnModel);
    }

    @GetMapping("/{eventId}")
    public ResponseEntity<?> getEventById(@PathVariable("eventId") int eventId) {
        apiReturnModel = new APIReturnModel();
        try {
            EventModel event = this.calendarService.getEventById(eventId);
            eventsVec = new Vector<>();
            eventsVec.add(event);

            apiReturnModel.setStatus("Success");
            apiReturnModel.setMessage("Event with user Id " + eventId);
            apiReturnModel.setCount(eventsVec.size());
            apiReturnModel.setData(eventsVec);
        } catch (Exception e) {
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage("Something went Wrong !!");
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok(apiReturnModel);
    }

    @DeleteMapping("/{eventId}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_FACULTY')")
    public ResponseEntity<?> deleteById(@PathVariable("eventId") int eventId) {
        apiReturnModel = new APIReturnModel();
        eventsVec = new Vector<>();
        try {
            EventModel event = this.calendarService.getEventById(eventId);
            this.calendarService.deleteEventById(eventId);
            eventsVec.add(event);

            apiReturnModel.setStatus("Success");
            apiReturnModel.setMessage("Event Deleted Successfully !");
            apiReturnModel.setData(eventsVec);
            apiReturnModel.setCount(eventsVec.size());
        } catch (Exception e) {
            apiReturnModel.setMessage("Something Went Wrong ! " + e.getMessage());
            apiReturnModel.setStatus("fail");
        }
        return ResponseEntity.ok(apiReturnModel);
    }

    // Delete all events
    @DeleteMapping("/")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_FACULTY')")
    public ResponseEntity<?> deleteAllEvents() {
        apiReturnModel = new APIReturnModel();
        try {
            this.calendarService.deleteAllEvents();
            apiReturnModel.setMessage("All Files Deleted Successfully !");
            apiReturnModel.setStatus("Success");
        } catch (Exception e) {
            apiReturnModel.setMessage("Something Went Wrong ! " + e.getMessage());
            apiReturnModel.setStatus("fail");
        }
        return ResponseEntity.ok(apiReturnModel);
    }

}
