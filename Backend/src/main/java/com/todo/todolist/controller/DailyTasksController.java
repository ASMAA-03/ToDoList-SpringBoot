package com.todo.todolist.controller;

import com.todo.todolist.entity.DailyTasksEntity;
import com.todo.todolist.repository.DailyTasksRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dailytasks")
@CrossOrigin(origins = "http://localhost:5173")
public class DailyTasksController {

    private final DailyTasksRepository dailyTasksRepository;

    public DailyTasksController(DailyTasksRepository dailyTasksRepository) {
        this.dailyTasksRepository = dailyTasksRepository;
    }
@GetMapping
    public List<DailyTasksEntity> getAllTasks(){
        return dailyTasksRepository.findAll();
}
@PostMapping
    public  DailyTasksEntity addTask(@RequestBody DailyTasksEntity task){
        return dailyTasksRepository.save(task);
}
@DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Integer id){
        dailyTasksRepository.deleteById(id);
}
}
