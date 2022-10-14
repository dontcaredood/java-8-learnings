package com.sandy.streams;

import com.sandy.data.StreamData;
import com.sandy.model.Employee;

import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

public class EmployeeManagementSystemService {
    final Comparator<Employee> sortByLname = Comparator.comparing(Employee::getLname);
    static Scanner scan = new Scanner(System.in);
    public void showEmployeeDataById() {
        System.out.println("Enter the Employee Id");
        int employeeId = scan.nextInt();
        new StreamData().employees
                .stream()
                .filter(x->x.getEmployeeId()==employeeId)
                .forEach(x->System.out.println("Employee Details:-\nEmployee Id:"+employeeId+"\nEmployee Name: "+ x.getFname()+" "+x.getLname()+"\nDesignation: "+x.getDesignation()+"\nSalary: "+x.getSalary()+"\nAddress: "+x.getAddress()));
    }

    public void printSE2s() {
        new StreamData().employees
                .stream()
                .filter(x->x.getDesignation().equals("SE2"))
                .map(x -> x.getFname().toUpperCase() + " " + x.getLname().toUpperCase())
                .sorted()
                .forEach(System.out::println);
    }

    public void printSEs() {
        new StreamData().employees
                .stream()
                .filter(x->x.getDesignation().equals("SE"))
                .map(x -> x.getFname().toUpperCase() + " " + x.getLname().toUpperCase())
                .sorted()
                .forEach(System.out::println);
    }

    public void printManagers() {
        new StreamData().employees
                .stream()
                .filter(x-> x.getDesignation().equals("PM"))
                .map(x -> x.getFname().toUpperCase() + " " + x.getLname().toUpperCase())
                .forEach(System.out::println);
    }

    public void printAllEmployeesSortByLname() {
        new StreamData().employees
                .stream()
                .sorted(sortByLname)
                .map(x -> x.getFname().toUpperCase() + " " + x.getLname().toUpperCase())
                .forEach(System.out::println);
    }

    public void printAllEmployees() {
        new StreamData().employees
                .stream()
                .map(x -> x.getFname().toUpperCase() + " " + x.getLname().toUpperCase())
                .forEach(System.out::println);
    }
    public void addHike(){
        System.out.println("Enter the Employee Designation");
        String designation = scan.next();
        System.out.println("Enter the % hike");
        double percentage = scan.nextDouble();
        double finalPercentage = percentage/100;
        List<Employee> UpdatedList = new StreamData().employees
                .stream()
                .filter(x -> x.getDesignation().equals(designation))
                .map(x -> {
                    Employee newEmp = new Employee(x);
                    newEmp.setSalary(x.getSalary()+(x.getSalary()* finalPercentage));
                    return newEmp;
                })
                .toList();
        UpdatedList.forEach(System.out::println);
    }

}
