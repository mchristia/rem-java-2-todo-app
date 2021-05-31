package de.neuefische.todobackend.repository;

import de.neuefische.todobackend.model.TodoItem;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoItemRepository extends PagingAndSortingRepository<TodoItem, String> {

    List<TodoItem> findAll();

}
