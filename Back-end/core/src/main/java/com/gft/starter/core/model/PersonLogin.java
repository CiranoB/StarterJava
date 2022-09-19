package com.gft.starter.core.model;

import java.util.Optional;
import java.util.UUID;

public class PersonLogin {

	private UUID uuidPerson;
	private String loginPerson;
	private String passwordPerson;
	private String token;
	private boolean admin;
	
	public PersonLogin(Optional<Person> person) {
		this.uuidPerson = person.get().getUuidPerson();
		this.loginPerson = person.get().getLoginPerson();
		this.passwordPerson = person.get().getPasswordPerson();
		this.admin = person.get().isAdmin();
	}
	
	public PersonLogin() {}
	
	public UUID getUuidPerson() {
		return uuidPerson;
	}
	public void setUuidPerson(UUID uuidPerson) {
		this.uuidPerson = uuidPerson;
	}
	public String getLoginPerson() {
		return loginPerson;
	}
	public void setLoginPerson(String loginPerson) {
		this.loginPerson = loginPerson;
	}
	public String getPasswordPerson() {
		return passwordPerson;
	}
	public void setPasswordPerson(String passwordPerson) {
		this.passwordPerson = passwordPerson;
	}
	public boolean isAdmin() {
		return admin;
	}
	public void setAdmin(boolean admin) {
		this.admin = admin;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
}
