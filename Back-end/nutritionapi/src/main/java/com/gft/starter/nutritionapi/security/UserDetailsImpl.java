package com.gft.starter.nutritionapi.security;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.gft.starter.nutritionapi.model.Person;
import com.gft.starter.nutritionapi.model.Role;

public class UserDetailsImpl implements UserDetails{

	private static final long serialVersionUID = 1L;
	private String userName;
	private String password;
	private List<Role> roles;

	
	public UserDetailsImpl(Person person) {
		this.userName = person.getLoginPerson();
		this.password = person.getPasswordPerson();
		this.roles = person.getRoles();
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return this.roles;
	}

	@Override
	public String getPassword() {
		return this.password;
	}

	@Override
	public String getUsername() {
		return this.userName;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
