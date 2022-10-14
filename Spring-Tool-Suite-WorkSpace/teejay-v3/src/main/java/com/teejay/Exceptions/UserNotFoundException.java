package com.teejay.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.apache.logging.log4j.*;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class UserNotFoundException extends Exception{
	private String loginId;
	private static final Logger LOGGER = LogManager.getLogger(UserNotFoundException.class);
	public UserNotFoundException(String loginId) {
		this.loginId = loginId;
        LOGGER.error("User not found ! Please signup for :"+loginId);
	}
	/**
	 * Getter function for course code
	 * @return
	 */
	public String getUsername()
	{
		return loginId;
	}
	

	/**
	 * Message returned when exception is thrown
	 */
	@Override
	public String getMessage() 
	{
		return "User not found for : "+ loginId;
	}

}



