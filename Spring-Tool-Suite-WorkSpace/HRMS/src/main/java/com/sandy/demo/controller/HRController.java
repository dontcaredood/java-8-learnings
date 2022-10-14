package com.sandy.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sandy.demo.model.Countries;
import com.sandy.demo.model.Departments;
import com.sandy.demo.model.*;
import com.sandy.demo.service.HrService;

import java.util.List;
@RestController
@CrossOrigin(exposedHeaders = "Access-Control-Allow-Origin")
@RequestMapping("/hr")
public class HRController {
	
	@Autowired
	HrService hrService;
	
	@RequestMapping(value = "/test", produces = "application/json", method = RequestMethod.GET)
	public String demoTest() {
		return "Hello HR";
	}

	@RequestMapping(value = "/showCountries",produces = "application/json", method = RequestMethod.GET)
	public List<Countries> showCountries() {
		
		return hrService.listAllCountries();
	}
	
	@RequestMapping(value = "/showDepartments",produces = "application/json", method = RequestMethod.GET)
	public List<Departments> showDepartments() {
		
		return hrService.listDepartments();
	}
	
	@RequestMapping(value = "/showEmployees",produces = "application/json", method = RequestMethod.GET)
	public List<Employees> showEmployees() {
		
		return hrService.listEmployees();
	}
	
	@RequestMapping(value = "/showJobs",produces = "application/json", method = RequestMethod.GET)
	public List<Jobs> showJobs() {
		
		return hrService.listJobs();
	}

}
