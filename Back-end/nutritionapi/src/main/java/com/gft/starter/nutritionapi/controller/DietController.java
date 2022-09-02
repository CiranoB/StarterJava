package com.gft.starter.nutritionapi.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.gft.starter.nutritionapi.model.Diet;
import com.gft.starter.nutritionapi.model.Nutritionist;
import com.gft.starter.nutritionapi.repository.DietRepository;
import com.gft.starter.nutritionapi.repository.NutritionistRepository;
import com.gft.starter.nutritionapi.service.DietService;

@RequestMapping("/diet")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@EnableAsync
public class DietController {

	@Autowired
	DietRepository dietRepository;

	@Autowired
	NutritionistRepository nutritionistRepository;

	@Autowired
	DietService dietService;

	@GetMapping("/all")
	public ResponseEntity<List<Diet>> getAll() {
		return ResponseEntity.ok(dietRepository.findAll());
	}

	@GetMapping("/find/{uuid}")
	public ResponseEntity<Diet> getById(@PathVariable UUID uuid) {
		return dietRepository.findById(uuid).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}

	@PreAuthorize("hasRole('ROLE_NUTRITIONIST')")
	@PostMapping("/register")
	public ResponseEntity<Diet> post(@Valid @RequestBody Diet diet) throws ExecutionException {
		Optional<Nutritionist> nutritionist = nutritionistRepository.findById(diet.getNutritionist().getUuidPerson());
		if (!nutritionist.get().isStatusNutritionist()) {
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Nutricionista desativado", null);
		}

		Future<Float> caloria = dietService.acessandoApiNutri(diet.getFoodsDiet());

		try {
			Thread.sleep(2500);
			if (!caloria.isDone()) {
				throw new ResponseStatusException(HttpStatus.REQUEST_TIMEOUT, "API de nutrição não respondeu a tempo",
						null);
			}

			diet.setKcalDiet(caloria.get());

		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		return dietService.criandoDieta(diet).map(resp -> ResponseEntity.status(HttpStatus.CREATED).body(resp))
				.orElse(ResponseEntity.status(HttpStatus.BAD_REQUEST).build());
	}

	@PutMapping("/update")
	public ResponseEntity<Diet> put(@Valid @RequestBody Diet diet) throws ExecutionException {
		Optional<Nutritionist> nutritionist = nutritionistRepository.findById(diet.getNutritionist().getUuidPerson());
		if (!nutritionist.get().isStatusNutritionist()) {
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Nutricionista desativado", null);
		}

		Future<Float> caloria = dietService.acessandoApiNutri(diet.getFoodsDiet());

		try {
			Thread.sleep(3000);
			if (!caloria.isDone()) {
				throw new ResponseStatusException(HttpStatus.REQUEST_TIMEOUT, "API de nutrição não respondeu a tempo",
						null);
			}

			diet.setKcalDiet(caloria.get());

		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		return dietService.atualizandoDieta(diet)
				.map(resp -> ResponseEntity.status(HttpStatus.CREATED).body(resp))
				.orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
	}

	@PreAuthorize("hasRole('ROLE_NUTRITIONIST')")
	@DeleteMapping("/delete/{uuid}")
	public void delete(@PathVariable UUID uuid) {
		dietRepository.deleteById(uuid);
	}
}
