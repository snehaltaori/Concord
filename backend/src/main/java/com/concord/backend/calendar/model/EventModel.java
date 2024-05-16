package com.concord.backend.calendar.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Event")
public class EventModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int eventId;

    @NotBlank(message = "Title can't be Null")
    private String title;

    private String body;

//    @NotBlank(message = "start time can't be Null")
    private String timeStart;
//    @NotBlank(message = "end time can't be Null")
    private String timeEnd;
    private String dateDue; // 2024-03-22
//    @NotBlank(message = "semester can't be Null")
    private String semester; // Mtech, MBA, Sem 2

}
