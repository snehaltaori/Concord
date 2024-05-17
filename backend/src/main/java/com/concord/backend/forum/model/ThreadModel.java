    package com.tool.erp.forum.model;

    import jakarta.persistence.*;

    import java.util.ArrayList;
    import java.util.Date;
    import java.util.List;

    import lombok.*;
    import org.hibernate.annotations.CreationTimestamp;

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Entity
    @Table(name = "threads")
    public class ThreadModel {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long threadId;

        private String title;

        private String author;

        @CreationTimestamp
        @Temporal(TemporalType.TIMESTAMP)
        private Date postedAt;

        private String category;

        private String description;

    }
