package com.juice_game.controller;

import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController //убирает необходимость юзать @ResponseBody
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true") //разрешаем все источники
public class UserController {

    @GetMapping("/") //задаем методам адреса, па которым они будут доступны на фронте
    public String login() {
        System.out.println("123321");
        return "auth succesful";
    }

    @RequestMapping("/home")
    public Map<String, Object> getUUID(){
        Map<String, Object> model = new HashMap<>();
        model.put("id", UUID.randomUUID().toString());
        model.put("message", "mess");
        return model;
    }

    @RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }
}
