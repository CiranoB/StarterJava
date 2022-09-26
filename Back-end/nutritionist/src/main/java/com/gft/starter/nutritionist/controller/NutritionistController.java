package com.gft.starter.nutritionist.controller;

import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gft.starter.core.model.Nutritionist;
import com.gft.starter.core.repository.NutritionistRepository;
import com.gft.starter.nutritionist.service.AuthorizationService;

@RequestMapping("/nutritionist")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class NutritionistController {
	@Autowired
	AuthorizationService authorization;
	
	@Autowired
	NutritionistRepository nutritionistRepository;
	
	@GetMapping("/all")
	public ResponseEntity<List<Nutritionist>> getAll(@RequestHeader(value = "Authorization") String token){
		authorization.checkPermissions(token);
		return ResponseEntity.ok(nutritionistRepository.findAll());
	}
	
	@GetMapping("/find")
	public ResponseEntity<Nutritionist> getById(@RequestHeader(value = "Authorization") String token){
		authorization.checkPermissions(token);
		UUID uuidNutritionist = authorization.getUuidToken(token);
		System.out.println(uuidNutritionist);
		return nutritionistRepository.findById(uuidNutritionist).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());	
	}

	@PutMapping("/update")
	public ResponseEntity<Nutritionist> put(@RequestHeader(value = "Authorization") String token, @Valid @RequestBody Nutritionist nutritionist){
		authorization.checkPermissions(token);
		return ResponseEntity.ok(nutritionistRepository.save(nutritionist));
	}
	
	@DeleteMapping("/delete/{uuidNutritionist}")
	public void delete(@RequestHeader(value = "Authorization") String token, @PathVariable UUID uuidNutritionist) {
		authorization.checkPermissions(token);
		nutritionistRepository.deleteById(uuidNutritionist);
	}
}
