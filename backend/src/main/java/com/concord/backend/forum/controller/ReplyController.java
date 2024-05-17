package com.concord.backend.forum.controller;

import com.concord.backend.forum.model.ReplyModel;
import com.concord.backend.forum.service.ReplyService;
import com.concord.backend.setup.APIReturnModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Vector;

@RestController
@RequestMapping("/replies")
public class ReplyController {

    @Autowired
    private ReplyService replyService;

    private APIReturnModel apiReturnModel;
    private Vector<ReplyModel> repliesVec;

    @PostMapping("/")
    public ResponseEntity<?> createReply(@RequestBody ReplyModel replyModel) {
        apiReturnModel = new APIReturnModel();
        repliesVec = new Vector<>();
        try {
            ReplyModel createdReply = replyService.createReply(replyModel);
            repliesVec.add(createdReply);

            apiReturnModel.setStatus("success");
            apiReturnModel.setMessage("Reply Created Successfully");
            apiReturnModel.setData(repliesVec);
            apiReturnModel.setCount(repliesVec.size());
        } catch (Exception e) {
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage(e.getMessage());
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok(apiReturnModel);
    }

    @GetMapping("/")
    public ResponseEntity<?> getAllReplies() {
        apiReturnModel = new APIReturnModel();
        try {
            List<ReplyModel> replies = replyService.getAllReplies();
            repliesVec = new Vector<>(replies);

            apiReturnModel.setStatus("Success");
            apiReturnModel.setMessage("All Replies Retrieved");
            apiReturnModel.setCount(repliesVec.size());
            apiReturnModel.setData(repliesVec);
        } catch (Exception e) {
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage("Something went wrong !!");
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok(apiReturnModel);
    }

    @GetMapping("/{replyId}")
    public ResponseEntity<?> getReplyById(@PathVariable Long replyId) {
        apiReturnModel = new APIReturnModel();
        try {
            ReplyModel reply = replyService.getReplyById(replyId);

            apiReturnModel.setStatus("success");
            apiReturnModel.setMessage("Reply Retrieved Successfully");
            Vector<ReplyModel> replyVector = new Vector<>();
            replyVector.add(reply);
            apiReturnModel.setData(replyVector);
            apiReturnModel.setCount(1);
        } catch (Exception e) {
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage(e.getMessage());
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok(apiReturnModel);
    }

    @GetMapping("/{threadId}")
    public ResponseEntity<?> getReplyByThreadId(@PathVariable Long threadId) {
        apiReturnModel = new APIReturnModel();
        try {
            List<ReplyModel> reply = replyService.getReplyByThreadId(threadId);

            apiReturnModel.setStatus("success");
            apiReturnModel.setMessage("Reply Retrieved Successfully");
            Vector<ReplyModel> replyVector = new Vector<>();
            replyVector.add((ReplyModel) reply);
            apiReturnModel.setData(replyVector);
            apiReturnModel.setCount(1);
        } catch (Exception e) {
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage(e.getMessage());
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok(apiReturnModel);
    }

    @DeleteMapping("/{replyId}")
    public ResponseEntity<?> deleteReply(@PathVariable Long replyId) {
        apiReturnModel = new APIReturnModel();
        try {
            replyService.deleteReply(replyId);
            apiReturnModel.setStatus("success");
            apiReturnModel.setMessage("Reply Deleted Successfully");
            apiReturnModel.setCount(0);
        } catch (Exception e) {
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage(e.getMessage());
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok(apiReturnModel);
    }

    @DeleteMapping("/")
    public ResponseEntity<?> deleteAllReplies() {
        apiReturnModel = new APIReturnModel();
        try {
            replyService.deleteAllReplies();
            apiReturnModel.setStatus("success");
            apiReturnModel.setMessage("All Replies Deleted Successfully");
            apiReturnModel.setCount(0);
        } catch (Exception e) {
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage(e.getMessage());
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok(apiReturnModel);
    }
}
