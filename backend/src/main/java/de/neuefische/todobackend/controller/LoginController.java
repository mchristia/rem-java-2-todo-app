package de.neuefische.todobackend.controller;


import de.neuefische.todobackend.controller.dto.LoginData;
import de.neuefische.todobackend.security.service.JwtUtilsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("auth/login")
public class LoginController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtilsService jwtUtilsService;

    @Autowired
    public LoginController(AuthenticationManager authenticationManager, JwtUtilsService jwtUtilsService) {
        this.authenticationManager = authenticationManager;
        this.jwtUtilsService = jwtUtilsService;
    }

    @PostMapping
    public String login(@RequestBody LoginData loginData){
        UsernamePasswordAuthenticationToken userNamePasswordData = new UsernamePasswordAuthenticationToken(loginData.getUsername(), loginData.getPassword());
        authenticationManager.authenticate(userNamePasswordData);

        return  jwtUtilsService.createToken(new HashMap<>(
                Map.of("course", "rem-java-21-2")

        ), loginData.getUsername());
    }

}
