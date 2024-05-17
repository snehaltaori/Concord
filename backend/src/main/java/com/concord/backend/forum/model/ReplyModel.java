package com.concord.backend.forum.model;

import jakarta.persistence.*;
import java.util.Date;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "replies")
public class ReplyModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String author;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date postedAt;

    private String text;

    @Column(nullable = false)
    private Long threadId;
}

