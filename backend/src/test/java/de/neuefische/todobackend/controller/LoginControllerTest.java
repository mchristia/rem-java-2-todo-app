package de.neuefische.todobackend.controller;

import de.neuefische.todobackend.controller.dto.LoginData;
import de.neuefische.todobackend.security.model.AppUser;
import de.neuefische.todobackend.security.repository.AppUserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.TestPropertySource;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = "jwt.secret=some-jwt-secret")
class LoginControllerTest {
    @LocalServerPort
    private int port;

    @Autowired
    private AppUserRepository appUserRepository;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private TestRestTemplate restTemplate;


    @Test
    public void loginWithValidCredentialsShouldReturnValidJwtToken() {
        //Given
        appUserRepository.save(AppUser.builder()
                .username("some-user")
                .password(encoder.encode("superPassword!"))
                .build());

        //WHEN
        LoginData loginData = new LoginData("some-user", "superPassword!");
        ResponseEntity<String> response = restTemplate.postForEntity("http://localhost:" + port + "/auth/login", loginData, String.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        Claims body = Jwts.parser().setSigningKey("some-jwt-secret").parseClaimsJws(response.getBody()).getBody();
        assertThat(body.getSubject(), is("some-user"));

    }
    @Test
    public void loginWithInValidCredentialsShouldReturnNoToken() {
        //Given
        appUserRepository.save(AppUser.builder()
                .username("some-user")
                .password(encoder.encode("wrongPassword!"))
                .build());

        //WHEN
        LoginData loginData = new LoginData("some-user", "superPassword!");
        ResponseEntity<String> response = restTemplate.postForEntity("http://localhost:" + port + "/auth/login", loginData, String.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.UNAUTHORIZED));
    }

}
