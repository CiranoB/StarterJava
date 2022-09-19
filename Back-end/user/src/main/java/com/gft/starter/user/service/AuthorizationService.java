package com.gft.starter.user.service;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.gft.starter.core.model.User;
import com.gft.starter.core.repository.UserRepository;
import com.gft.starter.user.utility.JwtUtility;

import io.jsonwebtoken.Claims;

@Service
public class AuthorizationService {
	
	@Autowired
	private JwtUtility jwtUtility;
	
	@Autowired
	private UserRepository userRepository;
	
	public UUID checkPermissions(String token) {
		Claims claims = jwtUtility.getClaims(token);
		UUID uuid = UUID.fromString(claims.getSubject());
		Optional<User> user = userRepository.findById(uuid);
		if(!user.isPresent()) 
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Este usuário não é um User ou é Inexistente", null);

		if(!user.get().isStatusUser())
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User desativado", null);
		
		return uuid;
	}
}
