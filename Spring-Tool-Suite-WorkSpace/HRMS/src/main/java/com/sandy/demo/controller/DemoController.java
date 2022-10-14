package com.sandy.demo.controller;

import org.apache.logging.log4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.sandy.demo.exception.NoDataFoundException;
import com.sandy.demo.model.*;
import com.sandy.demo.rest.Response;
import com.sandy.demo.service.DemoService;

@RestController
@RequestMapping("/demo")
public class DemoController {
	@Autowired
	DemoService demoService;
	private static final Logger logger = LogManager.getLogger(DemoController.class);

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Customer demoTest() {
		return new Customer();
	}

	@RequestMapping(value = "/listAll", method = RequestMethod.GET)
	public Response listAll() throws NoDataFoundException {
		Response res = new Response();
		try {
			List<Customer> result = demoService.listAll();
			if (result.size() == 0) {
				throw new NoDataFoundException("No Data in the database!");
			} else {
				logger.info("List All Data | " + result.size() + " records found!");
				res.setObject(result);
				return res;
			}

		} catch (Exception e) {
			logger.error(e.getMessage());
			res.setErrorMessage(e.getMessage());
			return res;
		}

	}

	@RequestMapping(value = "/addCustomer", method = RequestMethod.POST)
	public Response addCustomer(@RequestBody Customer customer) throws NoDataFoundException {
		Response res = new Response();
		try {
			int customerId = demoService.addCustomer(customer);
			res.setResponseMessage("CUSTOMER ID "+customerId+" ADDED SUCCESSFULLY");
			return res;

		} catch (Exception e) {
			logger.error(e.getMessage());
			res.setErrorMessage(e.getMessage());
			return res;
		}

	}
	
	@RequestMapping(value = "/fetchCustomer/{customerId}", method = RequestMethod.GET)
	public Customer fetchCustomer(@PathVariable int customerId) throws NoDataFoundException {
		
		try {
			 return demoService.fetchCustomer(customerId);
		} catch (Exception e) {
			logger.error(e.getMessage());
			
			return null;
		}

	}
}
