package com.tool.erp.forum.repository;


import com.tool.erp.forum.model.ReplyModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReplyRepository extends JpaRepository<ReplyModel, Long> {
    List<ReplyModel> findByThreadId(Long threadId);

}