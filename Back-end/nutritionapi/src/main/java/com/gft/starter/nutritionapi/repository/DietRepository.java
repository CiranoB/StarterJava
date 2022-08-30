package com.gft.starter.nutritionapi.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gft.starter.nutritionapi.model.Diet;

@Repository
public interface DietRepository extends JpaRepository<Diet, UUID> {

	
}
