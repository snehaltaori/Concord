package com.tool.erp.forum.service;

import com.tool.erp.forum.model.ThreadModel;

import java.util.List;

public interface ThreadService {
    List<ThreadModel> getAllThreads();
    ThreadModel getThreadById(Long threadId);
    ThreadModel createThread(ThreadModel threadModel);
    void deleteThread(Long threadId);
    void deleteAllThreads();
}

