package com.juice_game.controller;

import com.juice_game.domain.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;


@CrossOrigin(origins = "http://localhost:4200") //разрешаем источник фронта
@RestController //убирает необходимость юзать @ResponseBody
@RequestMapping("/api/v1")
public class UserController {

    @RequestMapping(value = "/", method = RequestMethod.GET) //задаем методам адреса, па которым они будут доступны на фронте
    public String login() {
        System.out.println("123321");
        return "auth succesful";
    }

    @GetMapping("/home")
    public Map<String, Object> getUUID(){
        Map<String, Object> model = new HashMap<>();
        model.put("id", UUID.randomUUID().toString());
        model.put("message", "mess");
        return model;
    }

    @RequestMapping("/user")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization")
                .substring("Basic".length()).trim();
        return () ->  new String(Base64.getDecoder()
                .decode(authToken)).split(":")[0];
    }

    @RequestMapping("/login")
    public boolean login(@RequestBody User user) {
        return
                user.getUserName().equals("u") && user.getPassword().equals("p");
    }
}
