package com.juice_game;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Collections;

@SpringBootApplication
public class JuiceGameApplication {

    public static void main(String[] args) {
        SpringApplication.run(JuiceGameApplication.class, args);
    }

    @Bean
    CommandLineRunner init() {
        return args -> {
            System.out.println("sdfsdfsdfsdfdsfsdf");
            System.out.println("sdfsdfsdfsdfwddds fsdf");
        };
    }


}
