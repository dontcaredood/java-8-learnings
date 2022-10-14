package com.sandy.demo.model;

import javax.persistence.*;

@Entity
public class Jobs {
	@Id
	private int job_id;
	private String job_title;
	private float min_salary;
	private float max_salary;
	public int getJob_id() {
		return job_id;
	}
	public void setJob_id(int job_id) {
		this.job_id = job_id;
	}
	public String getJob_title() {
		return job_title;
	}
	public void setJob_title(String job_title) {
		this.job_title = job_title;
	}
	public float getMin_salary() {
		return min_salary;
	}
	public void setMin_salary(float min_salary) {
		this.min_salary = min_salary;
	}
	public float getMax_salary() {
		return max_salary;
	}
	public void setMax_salary(float max_salary) {
		this.max_salary = max_salary;
	}
	
	@Override
	public String toString() {
		return "Jobs [job_id=" + job_id + ", job_title=" + job_title + ", min_salary=" + min_salary + ", max_salary="
				+ max_salary + "]";
	}
	
	
}
