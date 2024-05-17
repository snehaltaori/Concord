package com.tool.erp.tasks.service;

import com.tool.erp.tasks.model.TaskModel;

import java.util.List;

public interface TaskService {
    List<TaskModel> getAllTasks();
    TaskModel getTaskById(int taskId);
    TaskModel createTask(TaskModel taskModel);
    void deleteTask(int taskId);
    void deleteAllTasks();
}
