package com.gft.starter.gateway.config.utility;

import org.springframework.stereotype.Component;

import com.gft.starter.gateway.config.jwt.exception.JwtTokenMalformedException;
import com.gft.starter.gateway.config.jwt.exception.JwtTokenMissingException;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

@Component
public class JwtUtility {
	
	private String secretKey = "secretkey123";

	public Claims getClaims(final String token) {
		try {
			System.out.println(token);
			Claims body = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
			System.out.println();
			return body;
		} catch (Exception e) {
			System.out.println(e.getMessage() + ">" + e);
		}
		return null;
	}
	
	
	public boolean isInvalid(final String token) throws JwtTokenMalformedException, JwtTokenMissingException{
		try {
			Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
			return false;
		} catch (SignatureException ex) {
			throw new JwtTokenMalformedException("Invalid JWT signature");
		} catch (MalformedJwtException ex) {
			throw new JwtTokenMalformedException("Invalid JWT token");
		} catch (ExpiredJwtException ex) {
			throw new JwtTokenMalformedException("Expired JWT token");
		} catch (UnsupportedJwtException ex) {
			throw new JwtTokenMalformedException("Unsupported JWT token");
		} catch (IllegalArgumentException ex) {
			throw new JwtTokenMissingException("JWT claims string is empty.");
		}
	}

}

