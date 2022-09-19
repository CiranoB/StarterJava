package com.gft.starter.user.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gft.starter.core.model.Diet;
import com.gft.starter.core.model.Pay;
import com.gft.starter.core.model.User;
import com.gft.starter.core.repository.DietRepository;
import com.gft.starter.core.repository.UserRepository;
import com.gft.starter.user.service.AuthorizationService;
import com.gft.starter.user.service.UserService;

@RequestMapping("/user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private AuthorizationService authorization;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private DietRepository dietRepository;

	@GetMapping("/mydiet")
	public ResponseEntity<Diet> getDiet(@RequestHeader(value = "Authorization") String token){
		UUID uuidUser = authorization.checkPermissions(token);
		Optional<User> user = userRepository.findById(uuidUser);
		
		UUID uuidDiet = userService.mydiet(user);		
		return dietRepository.findById(uuidDiet)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	

	@GetMapping("/mypayments")
	public ResponseEntity<List<Pay>> getById(@RequestHeader(value = "Authorization") String token){
		UUID uuidUser = authorization.checkPermissions(token);
		Optional<User> user = userRepository.findById(uuidUser);
		
		List<Pay> pay = user.get().getPay();
		return ResponseEntity.ok(pay);
	}
}
