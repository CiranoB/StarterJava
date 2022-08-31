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

import com.gft.starter.nutritionapi.model.Nutritionist;
import com.gft.starter.nutritionapi.repository.NutritionistRepository;

@RequestMapping("/nutritionist")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class NutritionistController {
	
	@Autowired
	NutritionistRepository nutritionistRepository;
	
	@GetMapping
	public ResponseEntity<List<Nutritionist>> getAll(){
		return ResponseEntity.ok(nutritionistRepository.findAll());
	}
	
	@GetMapping("/find/{uuidNutritionist}")
	public ResponseEntity<Nutritionist> getById(@PathVariable UUID uuidNutritionist){
		return nutritionistRepository.findById(uuidNutritionist).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());	
	}
	
	@PostMapping("/register")
	public ResponseEntity<Nutritionist> post (@Valid @RequestBody Nutritionist nutritionist){
		return ResponseEntity.status(HttpStatus.CREATED).body(nutritionistRepository.save(nutritionist));
	}
	
	@PutMapping("/update")
	public ResponseEntity<Nutritionist> put(@Valid @RequestBody Nutritionist nutritionist){
		return ResponseEntity.ok(nutritionistRepository.save(nutritionist));
	}
	
	@DeleteMapping("/delete/{uuidNutritionist}")
	public void delete(@PathVariable UUID uuidNutritionist) {
		nutritionistRepository.deleteById(uuidNutritionist);
	}
}
