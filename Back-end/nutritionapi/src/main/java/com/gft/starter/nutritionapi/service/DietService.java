package com.gft.starter.nutritionapi.service;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
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
		
		diet.setKcalDiet(acessandoApiNutri(acessandoApiTraducao(diet.getFoodsDiet())));
		
		return Optional.of(dietRepository.save(diet));
	}
	
	public Optional<Diet> atualizandoDieta(Diet diet){
		
		if(dietRepository.findById(diet.getUuidDiet()).isPresent()) {
			
			diet.setKcalDiet(acessandoApiNutri(acessandoApiTraducao(diet.getFoodsDiet())));
			
			return Optional.ofNullable(dietRepository.save(diet));
		}
		
		return Optional.empty();
	}
	
	private String acessandoApiTraducao(String comidas) {
		String entrada = comidas;
		String resposta;
		AsyncHttpClient client = new DefaultAsyncHttpClient();
		resposta = client.preparePost("https://google-translate1.p.rapidapi.com/language/translate/v2")
			.setHeader("content-type", "application/x-www-form-urlencoded")
			.setHeader("Accept-Encoding", "application/gzip")
			.setHeader("X-RapidAPI-Key", "10d7a5b1aamshae6b8eea268bea9p17ba22jsn3050dc60d25c")
			.setHeader("X-RapidAPI-Host", "google-translate1.p.rapidapi.com")
			.setBody("q="+entrada+"&target=en&source=pt")
			.execute()
			.toCompletableFuture()
			.join().getResponseBody();

		
		try{
			client.close();
		}catch(IOException e) {
			e.printStackTrace();
		}
		
		//System.out.println("\\n\\nReposta:"+resposta+"\n\n");
		Matcher matcher = REGEX_ITEMS.matcher(resposta);
		if (!matcher.find()) {
			throw new IllegalArgumentException("Não encontrou items. API tradu");
		}

		//System.out.println("\n\n"+matcher+"\n\n");
		String[] items = matcher.group(1).split("\\}}");
		
		String foods = null;
		for (String item : items) {
			JSONObject jsonObject = new JSONObject(item);
			foods = jsonObject.getString("translatedText");
			break;
		}
		
		//System.out.println(foods);
		
		return foods;
	}
	
	
	private Float acessandoApiNutri(String foods) {
		String response;
		String entrada = foods;
		
		entrada = URLEncoder.encode(entrada, StandardCharsets.UTF_8);
		//System.out.println("Chegando: "+entrada);
		
		AsyncHttpClient client = new DefaultAsyncHttpClient();
		response = client.prepareGet("https://calorieninjas.p.rapidapi.com/v1/nutrition?query="+entrada)
			.setHeader("X-RapidAPI-Key", "3a5ce2784dmsh7391373d5c6013dp1e6befjsn312c0dd62df7")
			.setHeader("X-RapidAPI-Host", "calorieninjas.p.rapidapi.com")
			.execute()
			.toCompletableFuture()
			.join()
			.getResponseBody();
		
		response = response.replace(" ", "");
		//System.out.println("\n\n\n\n\n"+response+"\n\n\n\n");
		
		try{
			client.close();
		}catch(IOException e) {
			e.printStackTrace();
		}
		
		Float KcalDiet=(float) 0.0;
		
		Matcher matcher = REGEX_ITEMS.matcher(response);
		if (!matcher.find()) {
			throw new IllegalArgumentException("Não encontrou items. API nutri");
			//throw new ResponseStatusException(HttpStatus.REQUEST_TIMEOUT, "Não encontrou items. API nutri", null);

		}
		
		String[] items = matcher.group(1).split("\\},");
		
		for (String item : items) {
			item = item +"}";
			JSONObject jsonObject = new JSONObject(item);
			KcalDiet+=jsonObject.getFloat("calories");
		}
		
		return KcalDiet;
	}

}