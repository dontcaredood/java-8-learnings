package com.sandy.demo.rest;
import com.sandy.demo.model.*;
import java.util.List;
public class Response {
	
	private String errorMessage;
	
	private String responseMessage;
	
	private List<Customer> object;

	public Response() {}
	public Response(String errorMessage, String responseMessage) {
		super();
		this.errorMessage = errorMessage;
		this.responseMessage = responseMessage;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public String getResponseMessage() {
		return responseMessage;
	}

	public void setResponseMessage(String responseMessage) {
		this.responseMessage = responseMessage;
	}

	public List<Customer> getObject() {
		return object;
	}

	public void setObject(List<Customer> object) {
		this.object = object;
	}

	
	
}
