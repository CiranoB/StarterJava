package com.gft.starter.nutritionapi.controller;

import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gft.starter.nutritionapi.model.User;
import com.gft.starter.nutritionapi.repository.UserRepository;

@RequestMapping("/user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {

	@Autowired
	UserRepository userRepository;
	
	@GetMapping
	public ResponseEntity<List<User>> getAll(){
		return ResponseEntity.ok(userRepository.findAll());
	}
	
	@GetMapping("/find/{uuidUser}")
	public ResponseEntity<User> getById(@PathVariable UUID uuidUser){
		return userRepository.findById(uuidUser).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());	
	}
	
	@PostMapping("/register")
	public ResponseEntity<User> post (@Valid @RequestBody User user){
		return ResponseEntity.status(HttpStatus.CREATED).body(userRepository.save(user));
	}
	
	@PutMapping("/update")
	public ResponseEntity<User> put(@Valid @RequestBody User user){
		return ResponseEntity.ok(userRepository.save(user));
	}
	
	@DeleteMapping("/delete/{uuidUser}")
	public void deletar(@PathVariable UUID uuidUser) {
		userRepository.deleteById(uuidUser);
	}
	
}