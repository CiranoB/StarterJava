package com.gft.starter.auth.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.gft.starter.core.model.Bookkeeper;
import com.gft.starter.core.model.Nutritionist;
import com.gft.starter.core.model.Person;
import com.gft.starter.core.model.PersonLogin;
import com.gft.starter.core.model.User;
import com.gft.starter.core.repository.BookkeeperRepository;
import com.gft.starter.core.repository.NutritionistRepository;
import com.gft.starter.core.repository.PersonRepository;
import com.gft.starter.core.repository.UserRepository;

@Service
public class AuthenticationService {
	@Autowired
	private PersonRepository personRepository;

	@Autowired
	private NutritionistRepository nutritionistRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private BookkeeperRepository bookkeeperRepository;

	public Optional<Nutritionist> cadastrarNutritionist(Nutritionist nutritionist) {
		if (personRepository.findByLoginPerson(nutritionist.getLoginPerson()).isPresent()) {
			return Optional.empty();
		}

		nutritionist.setPasswordPerson(criptografarSenha(nutritionist.getPasswordPerson()));
		nutritionist.setTypePerson("nutritionist");
		return Optional.of(nutritionistRepository.save(nutritionist));
	}

	public Optional<User> cadastrarUser(User user) {
		if (personRepository.findByLoginPerson(user.getLoginPerson()).isPresent()) {
			return Optional.empty();
		}

		user.setPasswordPerson(criptografarSenha(user.getPasswordPerson()));
		user.setTypePerson("user");
		return Optional.of(userRepository.save(user));
	}

	public Optional<Bookkeeper> cadastrarBookkeeper(Bookkeeper bookkeeper) {
		if (personRepository.findByLoginPerson(bookkeeper.getLoginPerson()).isPresent()) {
			return Optional.empty();
		}

		bookkeeper.setPasswordPerson(criptografarSenha(bookkeeper.getPasswordPerson()));
		bookkeeper.setTypePerson("bookkeeper");
		return Optional.of(bookkeeperRepository.save(bookkeeper));
	}

	public Optional<PersonLogin> autenticarUsuario(PersonLogin personLogin) {

		Optional<Person> person = personRepository.findByLoginPerson(personLogin.getLoginPerson());

		if (person.isPresent()) {
			if (compararSenhas(personLogin.getPasswordPerson(), person.get().getPasswordPerson())) {

				PersonLogin AuthPersonLogin = new PersonLogin(person);
				return Optional.ofNullable(AuthPersonLogin);
			}
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Credenciais não coincidem", null);
		}
		throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Usuário sem cadastro", null);
	}

	private boolean compararSenhas(String senhaDigitada, String senhaBanco) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder.matches(senhaDigitada, senhaBanco);
	}

	private String criptografarSenha(String senha) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder.encode(senha);
	}
}
