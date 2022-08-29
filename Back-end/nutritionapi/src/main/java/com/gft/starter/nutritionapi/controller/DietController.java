package com.gft.starter.nutritionapi.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gft.starter.nutritionapi.model.Diet;
import com.gft.starter.nutritionapi.repository.DietRepository;

@RequestMapping("/dietas")
@CrossOrigin("*")
@RestController
public class DietController {

	@Autowired
	DietRepository dietRepository;
	
	@GetMapping
	public ResponseEntity<List<Diet>> getAll(){
		return ResponseEntity.ok(dietRepository.findAll());
	}
	
	@PostMapping
	public ResponseEntity<Diet> post(@Valid @RequestBody Diet diet){
		return ResponseEntity.status(HttpStatus.CREATED).body(dietRepository.save(diet));
	}
	
}
