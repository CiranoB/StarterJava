package com.gft.starter.nutritionapi.model;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class User extends Nutritionist {

	@NotNull
	private boolean statusUser;
	
	@NotNull
	private String objectiveUser;
	
	@NotNull
	private int heightUser;
	
	@NotNull
	private Float weightUser;
	
	@NotNull
	private Float BMRUser;

	@NotNull
	private String restrictionUser;
	
	@NotNull
	private String costUser;
	
}
