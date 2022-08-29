package com.gft.starter.nutritionapi.model;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

@Entity
@Table(name="tb_diet")
public class Diet {

	@Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "uuidDiet", columnDefinition = "char(36)")
    @Type(type = "org.hibernate.type.UUIDCharType")
    private UUID uuidDiet;
	
	private Float kcalDiet;
	
	private String foodsDiet;

	public UUID getUuid() {
		return uuidDiet;
	}

	public void setUuid(UUID uuidDiet) {
		this.uuidDiet = uuidDiet;
	}

	public Float getKcalDiet() {
		return kcalDiet;
	}

	public void setKcalDiet(Float kcalDiet) {
		this.kcalDiet = kcalDiet;
	}

	public String getFoodsDiet() {
		return foodsDiet;
	}

	public void setFoodsDiet(String foodsDiet) {
		this.foodsDiet = foodsDiet;
	}
	
}
