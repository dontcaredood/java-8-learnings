package com.sandy.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sandy.demo.model.*;
import com.sandy.demo.repository.*;
import java.util.*;

import javax.transaction.Transactional;
@Service("demoService")
public class DemoService {
	
	@Autowired
	Dao dao;
	
	public List<Customer> listAll(){
		
		return dao.listAll();
		
	}
	
	@Transactional
    public int addCustomer(Customer customer) {
       return dao.addCustomer(customer);
    }
	
	@Transactional
    public Customer fetchCustomer( int customerId) {
       return dao.fetchCustomer(customerId);
    }

}
