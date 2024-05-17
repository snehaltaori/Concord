package com.tool.erp.tasks.service;

import com.tool.erp.tasks.model.TaskModel;
import com.tool.erp.tasks.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {
    @Autowired
    TaskRepository taskRepository;

    @Override
    public List<TaskModel> getAllTasks() {
        return this.taskRepository.findAll();
    }

    @Override
    public TaskModel getTaskById(int taskId) {
        return this.taskRepository.findByTaskId(taskId);
    }

    @Override
    public TaskModel createTask(TaskModel taskModel) {
        return this.taskRepository.save(taskModel);
    }

    @Override
    public void deleteTask(int taskId) {
        this.taskRepository.deleteById(taskId);
    }

    @Override
    public void deleteAllTasks() {
        this.taskRepository.deleteAll();
    }

}
