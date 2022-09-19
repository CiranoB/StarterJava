package com.gft.starter.auth.controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gft.starter.auth.service.AuthenticationService;
import com.gft.starter.auth.utility.JwtUtility;
import com.gft.starter.core.model.Bookkeeper;
import com.gft.starter.core.model.JwtToken;
import com.gft.starter.core.model.Nutritionist;
import com.gft.starter.core.model.PersonLogin;
import com.gft.starter.core.model.User;

@RestController
@CrossOrigin(origins="*", allowedHeaders="*")
@RequestMapping("/auth")
public class LoginController {

	@Autowired
	private JwtUtility jwtUtility;
	
	@Autowired
	private AuthenticationService  authenticationService;

	@PostMapping("/login")
	public Optional<PersonLogin> authenticate(@RequestBody PersonLogin personLogin) throws Exception {
		
		Optional<PersonLogin> authPersonLogin = authenticationService.autenticarUsuario(personLogin);
		final String token = jwtUtility.generateToken(authPersonLogin);
		authPersonLogin.get().setToken(token);
		return authPersonLogin;
	}
	
	@PostMapping("/register/nutritionist")
	public ResponseEntity<Nutritionist> post (@Valid @RequestBody Nutritionist nutritionist){
		return authenticationService.cadastrarNutritionist(nutritionist)
				.map(resp -> ResponseEntity.status(HttpStatus.CREATED).body(resp))
				.orElse(ResponseEntity.status(HttpStatus.BAD_REQUEST).build());
	}
	
	@PostMapping("/register/bookkeeper")
	public ResponseEntity<Bookkeeper> post (@Valid @RequestBody Bookkeeper bookkeeper){
		return authenticationService.cadastrarBookkeeper(bookkeeper)
				.map(resp -> ResponseEntity.status(HttpStatus.CREATED).body(resp))
				.orElse(ResponseEntity.status(HttpStatus.BAD_REQUEST).build());
	}
	
	@PostMapping("/register/user")
	public ResponseEntity<User> post (@Valid @RequestBody User user){
		return authenticationService.cadastrarUser(user)
				.map(resp -> ResponseEntity.status(HttpStatus.CREATED).body(resp))
				.orElse(ResponseEntity.status(HttpStatus.BAD_REQUEST).build());
	}
	
}