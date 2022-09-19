package com.gft.starter.bookkeeper;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan({"com.gft.starter.core.model"})
@EnableJpaRepositories({"com.gft.starter.core.repository"})
public class BookkeeperApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookkeeperApplication.class, args);
	}

}
