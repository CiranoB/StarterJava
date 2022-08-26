package testandoApiNutricao;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.Scanner;

public class main {

	public static void main(String[] args) throws IOException, InterruptedException {
		
		Scanner scan =  new Scanner(System.in);
		String entrada = scan.nextLine();
		scan.close();
		
		HttpClient client = HttpClient.newHttpClient();
		entrada = entrada.replaceAll(" ", "%20");
		//System.out.println(entrada);
		
		URI url = URI.create("https://calorieninjas.p.rapidapi.com/v1/nutrition?query="+entrada);
		HttpRequest request = HttpRequest.newBuilder(url)
				.GET()
				.header("X-RapidAPI-Key", "3a5ce2784dmsh7391373d5c6013dp1e6befjsn312c0dd62df7")
				.header("X-RapidAPI-Host", "calorieninjas.p.rapidapi.com")
				.build();
		
		HttpResponse<String> response = client.send(request, BodyHandlers.ofString());
		
		String retorno = response.body();
		System.out.println(retorno);
	}
}