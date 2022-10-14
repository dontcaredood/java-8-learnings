package com.sandy.demo.repository;

import java.util.List;

import com.sandy.demo.model.Countries;
import com.sandy.demo.model.Departments;
import com.sandy.demo.model.Employees;
import com.sandy.demo.model.Jobs;

public interface HrDao {
	
	public List<Countries> listAllCountries();

	public List<Departments> listDepartments();

	public List<Employees> listEmployees();

	public List<Jobs> listJobs();
}
