package com.gft.starter.nutritionapi.controller;

import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gft.starter.nutritionapi.model.Group;
import com.gft.starter.nutritionapi.repository.DietRepository;
import com.gft.starter.nutritionapi.repository.GroupRepository;

@RestController // Definir que é uma controller
@RequestMapping("/group") // O caminho da url que acessará
@CrossOrigin(origins = "*", allowedHeaders = "*") // Permitir que venha de qualquer página a requisição
public class GroupController {

	@Autowired // injeção de dependência
	private GroupRepository groupRepository;

	@Autowired
	private DietRepository dietRepository;

	@GetMapping("/all")
	public ResponseEntity<List<Group>> getAll() {
		return ResponseEntity.ok(groupRepository.findAll());
	}
	
	@GetMapping("/find/{uuidGroup}")
	public ResponseEntity<Group> getById(@PathVariable Character uuidGroup){
		return groupRepository.findById(uuidGroup)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}

	@PostMapping("/register")
	public ResponseEntity<Group> post(@Valid @RequestBody Group group){
		//if(dietRepository.existsById(group.getDiet().getUuid())) {
			
		//}
		return null;
	}
}
