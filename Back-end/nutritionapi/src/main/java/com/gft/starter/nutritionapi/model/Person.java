package com.gft.starter.nutritionapi.model;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="TYPE")
public class Person {
	
	@Id
	@GeneratedValue(generator = "UUID")
	@GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
	@Column(name = "uuidPerson", columnDefinition = "char(36)")
	@Type(type = "org.hibernate.type.UUIDCharType")
	private UUID uuidPerson;
	
	@NotNull
	private String namePerson;
	
	@NotNull
	@Size(min=11,max=11)
	private String cpfPerson;
	
	@NotNull
	private int agePerson;
	
	@NotNull
	@Size(min=5, max=100)
	private String loginPerson;
	
	@NotNull
	@Size(min=5, max=100)
	private String passwordPerson;

	
}
