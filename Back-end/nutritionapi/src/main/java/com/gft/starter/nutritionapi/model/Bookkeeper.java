package com.gft.starter.nutritionapi.model;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
public class Bookkeeper extends Person{

	@NotNull
	private boolean statusBookkeeper;
	
	@NotNull
	private String registerBookkeeper;
}
