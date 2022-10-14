package com.sandy.demo.repository;
import java.util.*;
import com.sandy.demo.model.*;

public interface Dao {
	
	public List<Customer> listAll();
	
    public int addCustomer(Customer customer);
    
    public Customer fetchCustomer(int id);
}
