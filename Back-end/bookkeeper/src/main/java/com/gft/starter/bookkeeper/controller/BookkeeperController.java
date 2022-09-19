package com.gft.starter.bookkeeper.controller;

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

import com.gft.starter.bookkeeper.service.AuthorizationService;
import com.gft.starter.core.model.Bookkeeper;
import com.gft.starter.core.repository.BookkeeperRepository;


@RequestMapping("/bookkeeper")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class BookkeeperController {

	@Autowired
	AuthorizationService authorization;
	
	@Autowired
	BookkeeperRepository bookkeeperRepository;
	
	@GetMapping("/all")
	public ResponseEntity<List<Bookkeeper>> getAll(@RequestHeader(value = "Authorization") String token){
		authorization.checkPermissions(token);
		return ResponseEntity.ok(bookkeeperRepository.findAll());
	}
	
	@GetMapping("/find/{uuidBookkeeper}")
	public ResponseEntity<Bookkeeper> getById(@RequestHeader(value = "Authorization") String token, @PathVariable UUID uuidBookkeeper){
		authorization.checkPermissions(token);
		return bookkeeperRepository.findById(uuidBookkeeper).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());	
	}
	
	@PutMapping("/update")
	public ResponseEntity<Bookkeeper> put(@RequestHeader(value = "Authorization") String token, @Valid @RequestBody Bookkeeper bookkeeper){
		authorization.checkPermissions(token);
		return ResponseEntity.ok(bookkeeperRepository.save(bookkeeper));
	}
	
	@DeleteMapping("/delete/{uuidPerson}")
	public void delete(@RequestHeader(value = "Authorization") String token, @PathVariable UUID uuid) {
		authorization.checkPermissions(token);
		bookkeeperRepository.deleteById(uuid);
	}
}
