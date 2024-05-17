package com.tool.erp.forum.service;


import com.tool.erp.forum.model.ThreadModel;
import com.tool.erp.forum.repository.ThreadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ThreadServiceImpl implements ThreadService {

    @Autowired
    private ThreadRepository threadRepository;

    @Override
    public List<ThreadModel> getAllThreads() {
        return threadRepository.findAll();
    }

    @Override
    public ThreadModel getThreadById(Long threadId) {
        return threadRepository.findById(threadId).orElse(null);
    }

    @Override
    public ThreadModel createThread(ThreadModel threadModel) {
        return threadRepository.save(threadModel);
    }

    @Override
    public void deleteThread(Long threadId) {
        threadRepository.deleteById(threadId);
    }

    @Override
    public void deleteAllThreads() {
        threadRepository.deleteAll();
    }
}
