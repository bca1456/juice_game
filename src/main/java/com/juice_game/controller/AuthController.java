package com.juice_game.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

//@CrossOrigin(origins = "http://localhost:4200") //разрешаем источник фронта
@RestController //убирает необходимость юзать @ResponseBody
@RequestMapping("/api/v1")
public class AuthController {

    @RequestMapping("/auth") //задаем методам адреса, па которым они будут доступны на фронте
    public Map<String, String> login() {
        Map<String, String> auth = new HashMap<>();
        auth.put("auth", "successful");
        System.out.println("123321");
        return auth;
    }

    @GetMapping("/home")
    public Map<String, Object> getUUID(){
        Map<String, Object> model = new HashMap<>();
        model.put("id", UUID.randomUUID().toString());
        model.put("message", "mess");
        return model;
    }
}
