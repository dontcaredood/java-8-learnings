package com.sandy.model;

public class Employee {
    public Employee(Employee x) {
        this.salary = x.getSalary();
        this.employeeId = x.employeeId;
        this.designation = x.designation;
        this.fname = x.fname;
        this.lname = x.lname;
        this.address = x.address;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "employeeId=" + employeeId +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", designation='" + designation + '\'' +
                ", address='" + address + '\'' +
                ", salary=" + salary +
                '}';
    }

    public Employee(int a, String f, String l, String d, String add, double sal){
        this.address = add;
        this.employeeId = a;
        this.designation = d;
        this.fname = f;
        this.lname = l;
        this.salary = sal;
    }
    private int employeeId;
    private String fname;
    private String lname;
    private String designation;
    private String address;
    private double salary;

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public int getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }
}
