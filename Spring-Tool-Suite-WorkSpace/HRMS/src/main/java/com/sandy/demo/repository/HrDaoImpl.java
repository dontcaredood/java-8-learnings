package com.sandy.demo.repository;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sandy.demo.model.Countries;
import com.sandy.demo.model.Departments;
import com.sandy.demo.model.Employees;
import com.sandy.demo.model.Jobs;
@Repository
public class HrDaoImpl implements HrDao{
	@Autowired
	SessionFactory sessionFactory;
	
	Transaction transaction = null;

	@Override
	public List<Countries> listAllCountries() {
		
		Session session = this.sessionFactory.openSession();
		transaction = session.beginTransaction();
		List<Countries> result = session.createQuery("from Countries").list();
		return result;
	}
	
	@Override
	public List<Departments> listDepartments() {
		
		Session session = this.sessionFactory.openSession();
		transaction = session.beginTransaction();
		List<Departments> result = session.createQuery("from Departments").list();
		return result;
	}

	@Override
	public List<Employees> listEmployees() {
		Session session = this.sessionFactory.openSession();
		transaction = session.beginTransaction();
		Query q = session.createQuery("from Employees");
		List<Employees> result = q.list();
		return result;
	}
	
	@Override
	public List<Jobs> listJobs() {
		Session session = this.sessionFactory.openSession();
		transaction = session.beginTransaction();
		Query q = session.createQuery("from Jobs");
		List<Jobs> result = q.list();
		return result;
	}

}
