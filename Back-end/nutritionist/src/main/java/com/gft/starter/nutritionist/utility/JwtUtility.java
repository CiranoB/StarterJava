package com.gft.starter.nutritionist.utility;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

@Component
public class JwtUtility {
	
	private String secretKey = "secretkey123";
	
	public Claims getClaims(final String token) {
		try {
			Claims body = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
			return body;
		} catch (Exception e) {
			System.out.println(e.getMessage() + ">" + e);
		}
		return null;
	}
}
