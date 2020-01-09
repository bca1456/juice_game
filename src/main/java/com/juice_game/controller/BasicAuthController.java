package com.juice_game.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@CrossOrigin(origins = "http://localhost:4200") //разрешаем источник фронта
@RestController //убирает необходимость юзать @ResponseBody
@RequestMapping("/api/v1")
public class BasicAuthController {

    @RequestMapping(path = "/basicauth")
    public String basicAuth(){
        return "Authentificated";
    }
}
