package de.neuefische.todobackend.security.service;

import de.neuefische.todobackend.security.model.AppUser;
import de.neuefische.todobackend.security.repository.AppUserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.function.Executable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Optional;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class AppUserDetailsServiceTest {

    private AppUserRepository appUserRepository = mock(AppUserRepository.class);
    private AppUserDetailsService appUserDetailsService = new AppUserDetailsService(appUserRepository);

    @Test
    public void findUserByName(){
        // Given
        when(appUserRepository.findById("Hans")).thenReturn(
                Optional.of(
                        AppUser.builder()
                            .username("Hans")
                            .password("super-password")
                            .build()));

        // When
        UserDetails actual = appUserDetailsService.loadUserByUsername("Hans");

        // Then
        assertThat(actual.getUsername(), is("Hans"));
        assertThat(actual.getPassword(), is("super-password"));
    }

    @Test
    public void throwsWhenUsernameIsNotFound(){
        // Given
        when(appUserRepository.findById("Hans")).thenReturn(Optional.empty());

        // When
        Executable when = () -> appUserDetailsService.loadUserByUsername("Hans");

        // Then
        assertThrows(UsernameNotFoundException.class, when);
    }
}