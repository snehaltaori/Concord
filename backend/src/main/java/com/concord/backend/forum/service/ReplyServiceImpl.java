package com.concord.backend.forum.service;


import com.concord.backend.forum.model.ReplyModel;
import com.concord.backend.forum.repository.ReplyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReplyServiceImpl implements ReplyService {

    @Autowired
    private ReplyRepository replyRepository;

    @Override
    public List<ReplyModel> getAllReplies() {
        return replyRepository.findAll();
    }

    @Override
    public ReplyModel getReplyById(Long replyId) {
        return replyRepository.findById(replyId).orElse(null);
    }

    @Override
    public List<ReplyModel> getReplyByThreadId(Long threadId) {
        return replyRepository.findByThreadId(threadId);
    }

    @Override
    public ReplyModel createReply(ReplyModel replyModel) {
        return replyRepository.save(replyModel);
    }

    @Override
    public void deleteReply(Long replyId) {
        replyRepository.deleteById(replyId);
    }

    @Override
    public void deleteAllReplies() {
        replyRepository.deleteAll();
    }
}

