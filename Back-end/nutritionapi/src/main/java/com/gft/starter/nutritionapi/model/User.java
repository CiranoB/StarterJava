package com.gft.starter.nutritionapi.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="tb_user")
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

	public boolean isStatusUser() {
		return statusUser;
	}

	public void setStatusUser(boolean statusUser) {
		this.statusUser = statusUser;
	}

	public String getObjectiveUser() {
		return objectiveUser;
	}

	public void setObjectiveUser(String objectiveUser) {
		this.objectiveUser = objectiveUser;
	}

	public int getHeightUser() {
		return heightUser;
	}

	public void setHeightUser(int heightUser) {
		this.heightUser = heightUser;
	}

	public Float getWeightUser() {
		return weightUser;
	}

	public void setWeightUser(Float weightUser) {
		this.weightUser = weightUser;
	}

	public Float getBMRUser() {
		return BMRUser;
	}

	public void setBMRUser(Float bMRUser) {
		BMRUser = bMRUser;
	}

	public String getRestrictionUser() {
		return restrictionUser;
	}

	public void setRestrictionUser(String restrictionUser) {
		this.restrictionUser = restrictionUser;
	}

	public String getCostUser() {
		return costUser;
	}

	public void setCostUser(String costUser) {
		this.costUser = costUser;
	}
	
	
	
	
}
