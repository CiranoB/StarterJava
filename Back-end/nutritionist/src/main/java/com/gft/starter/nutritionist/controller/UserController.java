package com.gft.starter.nutritionist.controller;

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
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gft.starter.core.model.User;
import com.gft.starter.core.repository.UserRepository;
import com.gft.starter.nutritionist.service.AuthorizationService;

@RequestMapping("/nutritionist/user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {
	@Autowired
	AuthorizationService authorization;
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/all")
	public ResponseEntity<List<User>> getAll(@RequestHeader(value = "Authorization") String token){
		authorization.checkPermissions(token);
		return ResponseEntity.ok(userRepository.findAll());
	}
	
	@GetMapping("/find/{uuidUser}")
	public ResponseEntity<User> getById(@RequestHeader(value = "Authorization") String token, @PathVariable UUID uuidUser){
		authorization.checkPermissions(token);
		return userRepository.findById(uuidUser).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());	
	}
	
	@PostMapping("/register")
	public ResponseEntity<User> post (@RequestHeader(value = "Authorization") String token, @Valid @RequestBody User oUser){
		authorization.checkPermissions(token);
		return ResponseEntity.status(HttpStatus.CREATED).body(userRepository.save(oUser));
	}
	
	@PutMapping("/update")
	public ResponseEntity<User> put(@RequestHeader(value = "Authorization") String token, @Valid @RequestBody User user){
		authorization.checkPermissions(token);
		return ResponseEntity.ok(userRepository.save(user));
	}
	
	@DeleteMapping("/delete/{uuidPerson}")
	public void deletar(@RequestHeader(value = "Authorization") String token, @PathVariable UUID uuidPerson) {
		authorization.checkPermissions(token);
		userRepository.deleteById(uuidPerson);
	}
	
}
