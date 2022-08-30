package com.gft.starter.nutritionapi.service;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.asynchttpclient.AsyncHttpClient;
import org.asynchttpclient.DefaultAsyncHttpClient;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gft.starter.nutritionapi.model.Diet;
import com.gft.starter.nutritionapi.repository.DietRepository;

@Service
public class DietService {

	private static final Pattern REGEX_ITEMS = Pattern.compile(".*\\[(.+)\\].*");
	
	@Autowired
	DietRepository dietRepository;
	
	public Optional<Diet> criandoDieta(Diet diet){
		
		diet.setKcalDiet(acessandoApiNutri(diet.getFoodsDiet()));
		
		return Optional.of(dietRepository.save(diet));
	}
	
	public Optional<Diet> atualizandoDieta(Diet diet){
		
		if(dietRepository.findById(diet.getUuidDiet()).isPresent()) {
			
			diet.setKcalDiet(acessandoApiNutri(diet.getFoodsDiet()));
			
			return Optional.ofNullable(dietRepository.save(diet));
		}
		
		return Optional.empty();
	}
	
	private Float acessandoApiNutri(String comidas) {
		String response;
		String entrada = comidas;
		
		entrada = URLEncoder.encode(entrada, StandardCharsets.UTF_8);
		System.out.println(entrada);
		AsyncHttpClient client = new DefaultAsyncHttpClient();
		response = client.prepareGet("https://calorieninjas.p.rapidapi.com/v1/nutrition?query="+entrada)
			.setHeader("X-RapidAPI-Key", "3a5ce2784dmsh7391373d5c6013dp1e6befjsn312c0dd62df7")
			.setHeader("X-RapidAPI-Host", "calorieninjas.p.rapidapi.com")
			.execute()
			.toCompletableFuture()
			.join()
			.getResponseBody();
		
		response = response.replace(" ", "");
		System.out.println("\n\n\n\n\n"+response+"\n\n\n\n");
		
		try{
			client.close();
		}catch(IOException e) {
			e.printStackTrace();
		}
		return parse(response);
	}
	
	private Float parse(String json) {
		Matcher matcher = REGEX_ITEMS.matcher(json);
		if (!matcher.find()) {
			throw new IllegalArgumentException("Não encontrou items.");
		}

		String[] items = matcher.group(1).split("\\},");
		List<Map<String, String>> dados = new ArrayList<>();
		
		float KcalDiet=0;
		for (String item : items) {
			item = item +"}";
			//System.out.println(item);
			JSONObject jsonObject = new JSONObject(item);
			KcalDiet+=jsonObject.getFloat("calories");
			//System.out.println("KcalDiet: "+jsonObject.getFloat("sugar_g"));
		}
		//System.out.printf("Total de calorias: %.2f", KcalDiet);
		return KcalDiet;
	}
}