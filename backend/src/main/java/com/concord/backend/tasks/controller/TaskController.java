package com.concord.backend.tasks.controller;

import com.concord.backend.setup.APIReturnModel;
import com.concord.backend.tasks.model.TaskModel;
import com.concord.backend.tasks.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Vector;


@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    TaskService taskService;
    APIReturnModel apiReturnModel;
    private Vector<TaskModel> tasksVec;

    @PostMapping("/")
    public ResponseEntity<?> createTask(@RequestBody TaskModel taskModel) {
        apiReturnModel = new APIReturnModel();
        tasksVec = new Vector<>();
        try {
            TaskModel task = this.taskService.createTask(taskModel);
            tasksVec.add(task);

            apiReturnModel.setStatus("success");
            apiReturnModel.setMessage("Task Created Successfully");
            apiReturnModel.setData(tasksVec);
            apiReturnModel.setCount(tasksVec.size());
        } catch (Exception e) {
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage(e.getMessage());
            apiReturnModel.setCount(0);

        }
        return ResponseEntity.ok(apiReturnModel);
    }

    @GetMapping("/")
    public ResponseEntity<?> getAllTasks() {
        apiReturnModel = new APIReturnModel();
        try {
            List<TaskModel> allTasks = this.taskService.getAllTasks();
            tasksVec = new Vector<>(allTasks);

            apiReturnModel.setStatus("Success");
            apiReturnModel.setMessage("All tasks retrieved");
            apiReturnModel.setCount(tasksVec.size());
            apiReturnModel.setData(tasksVec);
        } catch (Exception e) {
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage("Something went Wrong !!");
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok(apiReturnModel);
    }

    @DeleteMapping("/{taskId}")
    public ResponseEntity<?> deleteTask(@PathVariable int taskId) {
        apiReturnModel = new APIReturnModel();
        try {
            this.taskService.deleteTask(taskId);
            apiReturnModel.setStatus("success");
            apiReturnModel.setMessage("Task Deleted Successfully");
            apiReturnModel.setCount(0);
        } catch (Exception e) {
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage(e.getMessage());
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok(apiReturnModel);
    }

    @DeleteMapping("/")
    public ResponseEntity<?> deleteAllTasks() {
        apiReturnModel = new APIReturnModel();
        try {
            this.taskService.deleteAllTasks();
            apiReturnModel.setStatus("success");
            apiReturnModel.setMessage("All Tasks Deleted Successfully");
            apiReturnModel.setCount(0);
        } catch (Exception e) {
            apiReturnModel.setStatus("fail");
            apiReturnModel.setMessage(e.getMessage());
            apiReturnModel.setCount(0);
        }
        return ResponseEntity.ok(apiReturnModel);
    }

}
