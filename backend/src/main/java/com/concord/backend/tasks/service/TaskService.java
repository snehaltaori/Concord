package com.concord.backend.tasks.service;

import com.concord.backend.tasks.model.TaskModel;

import java.util.List;

public interface TaskService {
    List<TaskModel> getAllTasks();
    TaskModel getTaskById(int taskId);
    TaskModel createTask(TaskModel taskModel);
    void deleteTask(int taskId);
    void deleteAllTasks();
}
