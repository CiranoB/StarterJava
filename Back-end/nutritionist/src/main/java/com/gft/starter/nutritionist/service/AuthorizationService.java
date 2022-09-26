package com.gft.starter.nutritionist.service;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.gft.starter.core.model.Nutritionist;
import com.gft.starter.core.repository.NutritionistRepository;
import com.gft.starter.nutritionist.utility.JwtUtility;

import io.jsonwebtoken.Claims;

@Service
public class AuthorizationService {
	
	@Autowired
	private JwtUtility jwtUtility;
	
	@Autowired
	NutritionistRepository nutritionistRepository;
	
	public void checkPermissions(String token) {
		Claims claims = jwtUtility.getClaims(token);
		UUID uuid = UUID.fromString(claims.getSubject());
		Optional<Nutritionist> nutritionist = nutritionistRepository.findById(uuid);
		if(!nutritionist.isPresent()) 
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Este usuário não é um Nutritionist ou é Inexistente", null);

		if(!nutritionist.get().isStatusNutritionist())
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Nutritionist desativado", null);

	}
	
	public UUID getUuidToken (String token) {
		Claims claims = jwtUtility.getClaims(token);
		UUID uuid = UUID.fromString(claims.getSubject());
		
		return uuid;
	}
}
