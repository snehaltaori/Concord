package com.tool.erp.forum.repository;


import com.tool.erp.forum.model.ThreadModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ThreadRepository extends JpaRepository<ThreadModel, Long> {
    // You can add custom query methods here if needed
}
