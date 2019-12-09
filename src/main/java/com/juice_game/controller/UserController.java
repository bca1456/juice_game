package com.juice_game.controller;

import com.juice_game.domain.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController //убирает необходимость юзать @ResponseBody
@CrossOrigin(origins="http://localhost:4200") //разрешаем все источники
public class UserController {
    @RequestMapping("/login") //задаем методам адреса, па которым они будут доступны на фронте
    public boolean login(@RequestBody User user) {
        return user.getUserName().equals("user") && user.getPassword().equals("password");
    }

    @RequestMapping("/home")
    public Map<String, Object> home(){
        Map<String, Object> model = new HashMap<>();
        model.put("id", UUID.randomUUID().toString());
        model.put("message", "mess");
        return model;
    }
}
