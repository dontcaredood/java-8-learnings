package com.sandy.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sandy.demo.model.*;
import com.sandy.demo.repository.*;
import java.util.*;

import javax.transaction.Transactional;
@Service("hrService")
public class HrService {
	
	@Autowired
	HrDao hrDao;
	
	@Transactional
	public List<Countries> listAllCountries(){
		
		return hrDao.listAllCountries();
		
	}
	
	@Transactional
	public List<Departments> listDepartments(){
		
		return hrDao.listDepartments();
		
	}
	
	@Transactional
	public List<Employees> listEmployees(){
		
		return hrDao.listEmployees();
		
	}
	
	@Transactional
	public List<Jobs> listJobs(){
		
		return hrDao.listJobs();
		
	}
}
