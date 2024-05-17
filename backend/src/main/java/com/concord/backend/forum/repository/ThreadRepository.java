package com.concord.backend.forum.repository;


import com.concord.backend.forum.model.ThreadModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ThreadRepository extends JpaRepository<ThreadModel, Long> {
    // You can add custom query methods here if needed
}
