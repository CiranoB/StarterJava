package com.gft.starter.nutritionapi.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="tb_bookkeeper")
public class Bookkeeper extends Person{

	@NotNull
	private boolean statusBookkeeper;
	
	@NotNull
	private String registerBookkeeper;

	public boolean isStatusBookkeeper() {
		return statusBookkeeper;
	}

	public void setStatusBookkeeper(boolean statusBookkeeper) {
		this.statusBookkeeper = statusBookkeeper;
	}

	public String getRegisterBookkeeper() {
		return registerBookkeeper;
	}

	public void setRegisterBookkeeper(String registerBookkeeper) {
		this.registerBookkeeper = registerBookkeeper;
	}
	
	
}
