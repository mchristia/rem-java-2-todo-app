package de.neuefische.todobackend.security.repository;

import de.neuefische.todobackend.security.model.AppUser;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppUserRepository extends PagingAndSortingRepository<AppUser, String> {
}
