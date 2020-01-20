package com.juice_game.repos;

import com.juice_game.domain.Hero;
import org.aspectj.apache.bcel.util.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HeroRepository extends JpaRepository<Hero, Integer> {
    List<Hero> findById(int id);

    @Query(value = "SELECT h from Hero h where h.id=:id")
    Integer getHPById(@Param("id") Integer id);
}
