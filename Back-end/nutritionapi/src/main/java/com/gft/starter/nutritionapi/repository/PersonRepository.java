package com.gft.starter.nutritionapi.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gft.starter.nutritionapi.model.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, UUID>{

	public Optional<Person> findByLoginPerson(String loginPerson);
}
