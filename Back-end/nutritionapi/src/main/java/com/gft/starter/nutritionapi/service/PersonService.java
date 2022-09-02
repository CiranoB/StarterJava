package com.gft.starter.nutritionapi.service;

import java.nio.charset.Charset;
import java.util.Optional;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.gft.starter.nutritionapi.model.Person;
import com.gft.starter.nutritionapi.model.PersonLogin;
import com.gft.starter.nutritionapi.repository.PersonRepository;

@Service
public class PersonService {
	
	@Autowired
	private PersonRepository personRepository;

	// Método responsável por cadastrar usuário
	public Optional<Person> registerPerson(Person person) {
		if (personRepository.findByLoginPerson(person.getLoginPerson()).isPresent())
			throw new ResponseStatusException(HttpStatus.CONFLICT, "Usuário já existe.", null);;
		person.setPasswordPerson(encryptPassword(person.getPasswordPerson()));
		return Optional.of(person);
	}

	// Método responsável por atualizar usuário
	public Optional<Person> updatePerson(Person person) {
		if (personRepository.findById(person.getUuidPerson()).isPresent()) {
			Optional<Person> findPerson = personRepository.findByLoginPerson(person.getLoginPerson());
			if ((findPerson.isPresent()) && (findPerson.get().getUuidPerson() != person.getUuidPerson()))
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário não existe!", null);
			person.setPasswordPerson(encryptPassword(person.getPasswordPerson()));
			return Optional.ofNullable(personRepository.save(person));
		}

		return Optional.empty();

	}

	// Método responsável por autenticar o usuário
	public Optional<PersonLogin> authenticatePerson(Optional<PersonLogin> personLogin) {

		Optional<Person> person = personRepository.findByLoginPerson(personLogin.get().getLoginPersonLogin());
		System.out.println("Teste");
		System.out.println(personLogin.get().getLoginPersonLogin());
		if (person.isPresent()) {
			if (comparePassword(personLogin.get().getPasswordPersonLogin(), person.get().getPasswordPerson())) {
				personLogin.get().setUuidPerson(person.get().getUuidPerson());
				personLogin.get().setLoginPersonLogin(person.get().getLoginPerson());
				personLogin.get().setPasswordPersonLogin(person.get().getPasswordPerson());
				personLogin.get().setTokenPersonLogin(
						generateBasicToken(personLogin.get().getLoginPersonLogin(), personLogin.get().getPasswordPersonLogin()));
				personLogin.get().setRolesPersonLogin(person.get().getRoles());
				return personLogin;
			}
		}
		return Optional.empty();
	}

	// Método responsável por criptografar as senhas
	private String encryptPassword(String password) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder.encode(password);
	}

	// Método responsável por comparar senhas
	private boolean comparePassword(String passwordType, String passwordSave) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder.matches(passwordType, passwordSave);
	}

	// Método responsável por gerar token basico
	private String generateBasicToken(String usuario, String senha) {
		String token = usuario + ":" + senha;
		byte[] tokenBase64 = Base64.encodeBase64(token.getBytes(Charset.forName("US-ASCII")));
		return "Basic " + new String(tokenBase64);
	}

}
