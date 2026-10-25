package com.todo.todolist.repository;

import com.todo.todolist.entity.DailyTasksEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DailyTasksRepository extends JpaRepository<DailyTasksEntity,Integer> {
}
