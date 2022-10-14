package com.sandy.demo.repository;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sandy.demo.model.Customer;
import org.hibernate.HibernateException;
import org.hibernate.Query ;
import org.hibernate.Session;
import org.hibernate.Transaction;
@SuppressWarnings("deprecation")
@Repository
public class DaoImpl implements Dao{

	@Autowired
	private SessionFactory sessionFactory;
	public void setSessionFactory(SessionFactory sf) {
        this.sessionFactory = sf;
    }
	
	Transaction transaction = null;
	
	@Override
	public List<Customer> listAll() {
		
			 Session session = this.sessionFactory.openSession();
		     List<Customer>  customerList = session.createQuery("from Customer").list();
		     return customerList;
		
	}

	@Override
	public int addCustomer(Customer customer) {
		
		Session session = this.sessionFactory.openSession();
		
		Transaction tx = session.beginTransaction();
		
		int value = (int)session.save(customer);
		
		tx.commit();
		
		return value;
	}
	
	public Customer fetchCustomer(int id) {
		
		Session session = this.sessionFactory.openSession();
		
		transaction  = session.beginTransaction();
		
		return (Customer)session.get(Customer.class, id);
	}
	
	
}
