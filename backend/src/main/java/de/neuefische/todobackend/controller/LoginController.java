package de.neuefische.todobackend.controller;


import de.neuefische.todobackend.controller.dto.LoginData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("auth/login")
public class LoginController {

    private final AuthenticationManager authenticationManager;

    @Autowired
    public LoginController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @PostMapping
    public String login(@RequestBody LoginData loginData){
        UsernamePasswordAuthenticationToken userNamePasswordData = new UsernamePasswordAuthenticationToken(loginData.getUsername(), loginData.getPassword());
        authenticationManager.authenticate(userNamePasswordData);

        return  "some jwt";
    }

}
