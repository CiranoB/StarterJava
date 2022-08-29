package org.generation.blogpessoal.api;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.json.JSONObject;

public class parser {

	private static final Pattern REGEX_ITEMS = Pattern.compile(".*\\[(.+)\\].*");
	
	public static List<Map<String, String>> parse(String json) {
		Matcher matcher = REGEX_ITEMS.matcher(json);
		if (!matcher.find()) {

			throw new IllegalArgumentException("Não encontrou items.");
		}

		String[] items = matcher.group(1).split("\\},");
		List<Map<String, String>> dados = new ArrayList<>();
		
		System.out.println(dados);
		float totalSugar=0;
		for (String item : items) {
			item = item +"}";
			System.out.println(item);
			JSONObject jsonObject = new JSONObject(item);
			totalSugar+=jsonObject.getFloat("sugar_g");
			System.out.println("sugar_g: "+jsonObject.getFloat("sugar_g"));
		}
		System.out.printf("Total de açúcar: %.2f", totalSugar);
		return dados;
	}
}