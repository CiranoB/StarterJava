package org.generation.blogpessoal.api;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

import org.asynchttpclient.AsyncHttpClient;
import org.asynchttpclient.DefaultAsyncHttpClient;

public class consumoApiStarter {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub]
		String response;
		Scanner scan = new Scanner(System.in);
		String entrada = scan.nextLine();
		scan.close();
		
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
		
		
		
		/*String resposta = response.toString();
		resposta = resposta.split("body=")[1];
		
		resposta = resposta.replace(":", ":\"");
		resposta = resposta.replace(",", "\",");*/
		response = response.replace(" ", "");
		System.out.println("\n\n\n\n\n"+response+"\n\n\n\n");
		
		List<Map<String, String>> listaDeAtributos = parser.parse(response);
		List<Conteudo> conteudos = new ArrayList<>();
		for(Map<String, String> atributos : listaDeAtributos) {
			String sugar = atributos.get("sugar_g");
			var conteudo = new Conteudo(sugar);
			conteudos.add(conteudo);
		}
		System.out.println("\n*\n*\n*\nparei");
		for(Conteudo conteudo : conteudos) {
			System.out.println(conteudo.getSugar_g());
		}
		
		try{
			client.close();
		}catch(IOException e) {
			e.printStackTrace();
		}
	}

}
