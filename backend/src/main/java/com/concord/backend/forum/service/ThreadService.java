package com.concord.backend.forum.service;

import com.concord.backend.forum.model.ThreadModel;

import java.util.List;

public interface ThreadService {
    List<ThreadModel> getAllThreads();
    ThreadModel getThreadById(Long threadId);
    ThreadModel createThread(ThreadModel threadModel);
    void deleteThread(Long threadId);
    void deleteAllThreads();
}

