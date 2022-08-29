package com.gft.starter.nutritionapi.model;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Nutritionist extends Person{

	@NotNull
	@Size(min=4)
	private String crnNutritionist;
	
	@NotNull
	private boolean statusNutritionist;

	@NotNull
	@Size(min=4)
	private String registerNutritionist;
	
	
}
