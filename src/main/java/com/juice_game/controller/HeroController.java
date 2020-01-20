package com.juice_game.controller;

import com.juice_game.service.HeroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController //убирает необходимость юзать @ResponseBody
@RequestMapping("/api/v1/hero")
public class HeroController {

    @Autowired
    private HeroService heroService;

    @RequestMapping("/hp/{id}")
    public int getHP(@PathVariable int id){
        return this.heroService.getHPById(id);
    }
}
