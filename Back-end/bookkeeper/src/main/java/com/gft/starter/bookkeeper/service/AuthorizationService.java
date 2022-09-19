package com.gft.starter.bookkeeper.service;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.gft.starter.bookkeeper.utility.JwtUtility;
import com.gft.starter.core.model.Bookkeeper;
import com.gft.starter.core.repository.BookkeeperRepository;

import io.jsonwebtoken.Claims;

@Service
public class AuthorizationService {
	
	@Autowired
	private JwtUtility jwtUtility;
	
	@Autowired
	BookkeeperRepository bookkeeperRepository;
	
	public void checkPermissions(String token) {
		Claims claims = jwtUtility.getClaims(token);
		UUID uuid = UUID.fromString(claims.getSubject());
		Optional<Bookkeeper> bookkeeper = bookkeeperRepository.findById(uuid);
		if(!bookkeeper.isPresent()) 
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Este usuário não é um Bookkeeper ou é Inexistente", null);

		if(!bookkeeper.get().isStatusBookkeeper())
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Bookkeeper desativado", null);

	}
}
