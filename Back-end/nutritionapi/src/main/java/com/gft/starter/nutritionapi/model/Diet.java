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
    @Column(name = "uuid", columnDefinition = "char(36)")
    @Type(type = "org.hibernate.type.UUIDCharType")
    private UUID uuid;
	
	private float kcalDiet;
	
	private String foodsDiet;

	public UUID getUuid() {
		return uuid;
	}

	public void setUuid(UUID uuid) {
		this.uuid = uuid;
	}

	public float getKcalDiet() {
		return kcalDiet;
	}

	public void setKcalDiet(float kcalDiet) {
		this.kcalDiet = kcalDiet;
	}

	public String getFoodsDiet() {
		return foodsDiet;
	}

	public void setFoodsDiet(String foodsDiet) {
		this.foodsDiet = foodsDiet;
	}
	
}
