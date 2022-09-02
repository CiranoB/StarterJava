package com.gft.starter.nutritionapi.model;

import java.util.List;
import java.util.UUID;

public class PersonLogin {

	private UUID uuidPerson;

	private String loginPersonLogin;

	private String passwordPersonLogin;

	private String tokenPersonLogin;

	private List<Role> rolesPersonLogin;

	public PersonLogin(UUID uuidPerson, String loginPersonLogin, String passwordPersonLogin, String tokenPersonLogin,
			List<Role> rolesPersonLogin) {
		this.uuidPerson = uuidPerson;
		this.loginPersonLogin = loginPersonLogin;
		this.passwordPersonLogin = passwordPersonLogin;
		this.tokenPersonLogin = tokenPersonLogin;
		this.rolesPersonLogin = rolesPersonLogin;
	}

	public PersonLogin() {};

	public UUID getUuidPerson() {
		return uuidPerson;
	}

	public void setUuidPerson(UUID uuidPerson) {
		this.uuidPerson = uuidPerson;
	}

	public String getLoginPersonLogin() {
		return loginPersonLogin;
	}

	public void setLoginPersonLogin(String loginPersonLogin) {
		this.loginPersonLogin = loginPersonLogin;
	}

	public String getPasswordPersonLogin() {
		return passwordPersonLogin;
	}

	public void setPasswordPersonLogin(String passwordPersonLogin) {
		this.passwordPersonLogin = passwordPersonLogin;
	}

	public String getTokenPersonLogin() {
		return tokenPersonLogin;
	}

	public void setTokenPersonLogin(String tokenPersonLogin) {
		this.tokenPersonLogin = tokenPersonLogin;
	}

	public List<Role> getRolesPersonLogin() {
		return rolesPersonLogin;
	}

	public void setRolesPersonLogin(List<Role> rolesPersonLogin) {
		this.rolesPersonLogin = rolesPersonLogin;
	}

}
