package com.juice_game.service;

public interface HeroService {
    int getHPById(int id);
    void updateHP(int hp);
    int getMana();
    void updateMana(int mana);
    String getName();
}
