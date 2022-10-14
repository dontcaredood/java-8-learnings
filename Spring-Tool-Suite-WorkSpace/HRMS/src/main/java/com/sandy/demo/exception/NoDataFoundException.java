package com.sandy.demo.exception;

public class NoDataFoundException extends Exception{
	
private String errorMessage; 
	
	public NoDataFoundException(String value )
	{	
		errorMessage = value;
	} 
	public String getMessage() 
	{
		return errorMessage;
	}

}
