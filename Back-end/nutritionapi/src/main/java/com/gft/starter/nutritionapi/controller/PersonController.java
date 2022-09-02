package com.gft.starter.nutritionapi.controller;

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

import com.gft.starter.nutritionapi.model.PersonLogin;
import com.gft.starter.nutritionapi.service.PersonService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/logar")
public class PersonController {

	@Autowired
	private PersonService personService;
	
	@PostMapping
	public ResponseEntity<PersonLogin> login(@Valid @RequestBody Optional<PersonLogin> person){
		System.out.println(person.isPresent());
		return personService.authenticatePerson(person).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
	}
}
