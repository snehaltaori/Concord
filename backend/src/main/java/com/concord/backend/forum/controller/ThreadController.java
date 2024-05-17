package com.tool.erp.forum.controller;

import com.tool.erp.forum.model.ThreadModel;
import com.tool.erp.forum.service.ThreadService;
import com.tool.erp.setup.APIReturnModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Vector;

@RestController
@RequestMapping("/threads")
public class ThreadController {

    @Autowired
    private ThreadService threadService;

    @PostMapping("/")
    public ResponseEntity<APIReturnModel> createThread(@RequestBody ThreadModel threadModel) {
        APIReturnModel apiReturnModel = new APIReturnModel();
        try {
            ThreadModel createdThread = threadService.createThread(threadModel);
            apiReturnModel.setStatus("success");
            apiReturnModel.setMessage("Thread Created Successfully");
            Vector<ThreadModel> threadVector = new Vector<>();
            threadVector.add(createdThread);
            apiReturnModel.setData(threadVector);
            apiReturnModel.setCount(1);
        } catch (Exception e) {
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage(e.getMessage());
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok().body(apiReturnModel);
    }

    @GetMapping("/")
    public ResponseEntity<APIReturnModel> getAllThreads() {
        APIReturnModel apiReturnModel = new APIReturnModel();
        try {
            List<ThreadModel> threads = threadService.getAllThreads();
            apiReturnModel.setStatus("success");
            apiReturnModel.setMessage("All Threads Retrieved");
            apiReturnModel.setData(new Vector<>(threads));
            apiReturnModel.setCount(threads.size());
        } catch (Exception e) {
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage("Something went wrong while fetching threads");
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok().body(apiReturnModel);
    }

    @GetMapping("/{threadId}")
    public ResponseEntity<APIReturnModel> getThreadById(@PathVariable Long threadId) {
        APIReturnModel apiReturnModel = new APIReturnModel();
        try {
            ThreadModel thread = threadService.getThreadById(threadId);
            apiReturnModel.setStatus("success");
            apiReturnModel.setMessage("Thread Retrieved Successfully");
            Vector<ThreadModel> threadVector = new Vector<>();
            threadVector.add(thread);
            apiReturnModel.setData(threadVector);
            apiReturnModel.setCount(1);
        } catch (Exception e) {
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage("Thread with ID " + threadId + " not found");
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok().body(apiReturnModel);
    }

    @DeleteMapping("/{threadId}")
    public ResponseEntity<APIReturnModel> deleteThread(@PathVariable Long threadId) {
        APIReturnModel apiReturnModel = new APIReturnModel();
        try {
            threadService.deleteThread(threadId);
            apiReturnModel.setStatus("success");
            apiReturnModel.setMessage("Thread Deleted Successfully");
            apiReturnModel.setCount(0);
        } catch (Exception e) {
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage("Error deleting thread with ID " + threadId);
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok().body(apiReturnModel);
    }

    @DeleteMapping("/")
    public ResponseEntity<APIReturnModel> deleteAllThreads() {
        APIReturnModel apiReturnModel = new APIReturnModel();
        try {
            threadService.deleteAllThreads();
            apiReturnModel.setStatus("success");
            apiReturnModel.setMessage("All Threads Deleted Successfully");
            apiReturnModel.setCount(0);
        } catch (Exception e) {
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage("Error deleting all threads");
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok().body(apiReturnModel);
    }
}
