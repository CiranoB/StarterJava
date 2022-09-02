package com.gft.starter.nutritionapi.security;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.gft.starter.nutritionapi.model.Person;
import com.gft.starter.nutritionapi.repository.PersonRepository;

@Service
@Transactional
public class UserDetailsSerivceImpl implements UserDetailsService {

	@Autowired
	private PersonRepository personRepository;

	@Override
	public UserDetails loadUserByUsername(String personLogin) throws UsernameNotFoundException {

		Optional<Person> person = personRepository.findByLoginPerson(personLogin);
		person.orElseThrow(() -> new UsernameNotFoundException(personLogin + " not found."));

		return person.map(UserDetailsImpl::new).get();
	}

}
