package com.sandy.streams;

import java.util.Scanner;

public class EmployeeManagementSystem {

    static Scanner scan = new Scanner(System.in);
    public static void main(String[] args) {

        System.out.println("Employee Management System:\n1. Show all employees\n2. Show all employees by Lname\n3. Show Managers\n4. Show Software Engineers\n5. Show Senior Software Engineers\n6. Add Hike\n7. Show Employee Details");
        EmployeeManagementSystemService EMS = new EmployeeManagementSystemService();
        int choice = scan.nextInt();
        switch (choice) {
            case 1 -> EMS.printAllEmployees();
            case 2 -> EMS.printAllEmployeesSortByLname();
            case 3 -> EMS.printManagers();
            case 4 -> EMS.printSEs();
            case 5 -> EMS.printSE2s();
            case 6 -> EMS.addHike();
            case 7 -> EMS.showEmployeeDataById();
            default -> System.out.println("Enter valid option");
        }
    }



}
