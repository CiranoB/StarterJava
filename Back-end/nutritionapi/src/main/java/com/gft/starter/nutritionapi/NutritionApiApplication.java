package com.gft.starter.nutritionapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class NutritionApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(NutritionApiApplication.class, args);
	}

}