package com.tool.erp.tasks.repository;

import com.tool.erp.tasks.model.TaskModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<TaskModel, Integer>{

    TaskModel findByTaskId(int taskId);
    void deleteByTaskId(int taskId);
//    List<TaskModel> findAll();

}
