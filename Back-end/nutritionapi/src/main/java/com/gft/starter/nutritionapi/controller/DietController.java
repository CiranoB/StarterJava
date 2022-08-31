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

import com.gft.starter.nutritionapi.model.Diet;
import com.gft.starter.nutritionapi.repository.DietRepository;
import com.gft.starter.nutritionapi.service.DietService;

@RequestMapping("/diet")
@CrossOrigin("*")
@RestController
public class DietController {

	@Autowired
	DietRepository dietRepository;
	
	@Autowired
	DietService dietSerivce;
	
	@GetMapping("/all")
	public ResponseEntity<List<Diet>> getAll(){
		return ResponseEntity.ok(dietRepository.findAll());
	}
	
	@GetMapping("/find/{uuid}")
	public ResponseEntity<Diet> getById(@PathVariable UUID uuid){
		return dietRepository.findById(uuid).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());	
	}
	
	@PostMapping("/register")
	public ResponseEntity<Diet> post(@Valid @RequestBody Diet diet){
		return dietSerivce.criandoDieta(diet)
				.map(resp -> ResponseEntity.status(HttpStatus.CREATED).body(resp))
				.orElse(ResponseEntity.status(HttpStatus.BAD_REQUEST).build());
	}
	
	@PutMapping("/uptade")
	public ResponseEntity<Diet> put(@Valid @RequestBody Diet diet){
		return dietSerivce.atualizandoDieta(diet)
				.map(resp -> ResponseEntity.status(HttpStatus.CREATED).body(resp))
				.orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
	}
	
	@DeleteMapping("/delete/{uuid}")
	public void delete(@PathVariable UUID uuid){
		dietRepository.deleteById(uuid);
	}
}
