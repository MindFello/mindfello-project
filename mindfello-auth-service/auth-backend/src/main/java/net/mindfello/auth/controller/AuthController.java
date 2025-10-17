package net.mindfello.auth.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @GetMapping("/public/hello")
    public String publicHello() {
        return "Hello from public endpoint!";
    }

    @GetMapping("/secure/hello")
    public String secureHello(@AuthenticationPrincipal Jwt jwt) {
        return "Hello " + jwt.getClaimAsString("preferred_username") + "! Authenticated successfully.";
    }
}

