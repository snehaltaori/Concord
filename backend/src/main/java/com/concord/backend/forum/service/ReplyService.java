package com.tool.erp.forum.service;

import com.tool.erp.forum.model.ReplyModel;

import java.util.List;

public interface ReplyService {
    List<ReplyModel> getAllReplies();
    ReplyModel getReplyById(Long replyId);
    ReplyModel createReply(ReplyModel replyModel);
    List<ReplyModel> getReplyByThreadId(Long threadId);
    void deleteReply(Long replyId);
    void deleteAllReplies();
}
