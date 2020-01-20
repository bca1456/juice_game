package com.juice_game.service.impl;

import com.juice_game.repos.HeroRepository;
import com.juice_game.service.HeroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HeroServiceImpl implements HeroService {

    @Autowired
    private HeroRepository heroRepository;

    @Override
    public int getHPById(int id) {
        return heroRepository.getHPById(id);///////////////////////
    }

    @Override
    public void updateHP(int hp) {

    }

    @Override
    public int getMana() {
        return 0;
    }

    @Override
    public void updateMana(int mana) {

    }

    @Override
    public String getName() {
        return null;
    }
}
