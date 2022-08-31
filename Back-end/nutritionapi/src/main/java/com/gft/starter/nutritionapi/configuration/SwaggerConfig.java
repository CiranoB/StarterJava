package com.gft.starter.nutritionapi.configuration;

import org.springdoc.core.customizers.OpenApiCustomiser;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.responses.ApiResponse;
import io.swagger.v3.oas.models.responses.ApiResponses;

@Configuration
public class SwaggerConfig {

	// Configurando a API para o deploy no swagger
	@Bean
	public OpenAPI springNutritionOpenAPI() {
		return new OpenAPI()
				.info(new Info().title("Nutrition API").description("Projeto Starter - GFT").version("v0.0.1")
						.contact(new Contact().name("Nutrition API").url("https://github.com/CiranoB/StarterJava")
								.email("victorsousa247@gmail.com")))
				.externalDocs(new ExternalDocumentation().description("GitHub")
						.url("https://github.com/CiranoB/StarterJava"));
	}

	// Criar uma variavel para guardar os tipos de respostas, para personalizar
	// mensagens
	private ApiResponse createApiResponse(String message) {
		return new ApiResponse().description(message);
	}

	@Bean
	public OpenApiCustomiser cusstomerGlobalHeaderOpenApiCustomiser() {
		return openApi -> {
			openApi.getPaths().values().forEach(pathItem -> pathItem.readOperations().forEach(operation -> {
				
				ApiResponses apiResponses = operation.getResponses();
				
				apiResponses.addApiResponse("200", createApiResponse("Sucesso!"));
				apiResponses.addApiResponse("201", createApiResponse("Objeto cadastrado!"));
				apiResponses.addApiResponse("204", createApiResponse("Objeto excluído!"));
				apiResponses.addApiResponse("400", createApiResponse("Erro na requisição!"));
				apiResponses.addApiResponse("401", createApiResponse("Acesso não autorizado!"));
				apiResponses.addApiResponse("404", createApiResponse("Objeto não encontrado!"));
				apiResponses.addApiResponse("500", createApiResponse("Erro no servidor!"));

			}));
		};
	}
}
