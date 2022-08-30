package com.gft.starter.nutritionapi.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="tb_nutritionist")
public class Nutritionist extends Person{

	@NotNull
	@Size(min=4)
	private String crnNutritionist;
	
	@NotNull
	private boolean statusNutritionist;

	@NotNull
	@Size(min=4)
	private String registerNutritionist;

	public String getCrnNutritionist() {
		return crnNutritionist;
	}
	
	public Nutritionist(@NotNull @Size(min = 4) String crnNutritionist, @NotNull boolean statusNutritionist,
			@NotNull @Size(min = 4) String registerNutritionist) {
		super();
		this.crnNutritionist = crnNutritionist;
		this.statusNutritionist = statusNutritionist;
		this.registerNutritionist = registerNutritionist;
	}

	public Nutritionist() {
		super();
		// TODO Auto-generated constructor stub
	}

	//getters e setters
	public void setCrnNutritionist(String crnNutritionist) {
		this.crnNutritionist = crnNutritionist;
	}

	public boolean isStatusNutritionist() {
		return statusNutritionist;
	}

	public void setStatusNutritionist(boolean statusNutritionist) {
		this.statusNutritionist = statusNutritionist;
	}

	public String getRegisterNutritionist() {
		return registerNutritionist;
	}

	public void setRegisterNutritionist(String registerNutritionist) {
		this.registerNutritionist = registerNutritionist;
	}
	
	
	
	
}
