package com.gft.starter.nutritionapi.controller;

import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gft.starter.nutritionapi.model.User;
import com.gft.starter.nutritionapi.repository.UserRepository;

@RequestMapping("/user")
@CrossOrigin("*")
@RestController
public class UserController {

	@Autowired
	UserRepository userRepository;
	
	@GetMapping
	public ResponseEntity<List<User>> getAll(){
		return ResponseEntity.ok(userRepository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<User> getById(@PathVariable UUID uuid){
		return userRepository.findById(uuid).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());	
	}
	
	@PostMapping("/register")
	public ResponseEntity<User> post (@Valid @RequestBody User user){
		return ResponseEntity.status(HttpStatus.CREATED).body(userRepository.save(user));
	}
	
}
