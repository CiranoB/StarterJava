package com.gft.starter.user.service;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.gft.starter.core.model.Diet;
import com.gft.starter.core.model.Group;
import com.gft.starter.core.model.User;
import com.gft.starter.core.repository.DietRepository;
import com.gft.starter.core.repository.GroupRepository;

@Service
public class UserService {

	@Autowired
	private DietRepository dietRepository;

	@Autowired
	private GroupRepository groupRepository;

	public UUID mydiet(Optional<User> user) {
		if(user.get().getGroup()==null) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário não pertence a nenhum grupo", null);
		}
		Optional<Group> group = groupRepository.findById(user.get().getGroup().getUuidGroup());
		
		if(group.get().getDiet()==null) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Nenhuma dieta cadastrada para o grupo deste usuário", null);
		}
		Optional<Diet> diet = dietRepository.findById(group.get().getDiet().getUuidDiet());
		
		return diet.get().getUuidDiet();

	}
}
