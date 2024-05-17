package com.concord.backend.tasks.repository;

import com.concord.backend.tasks.model.TaskModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<TaskModel, Integer>{

    TaskModel findByTaskId(int taskId);
    void deleteByTaskId(int taskId);
//    List<TaskModel> findAll();

}
