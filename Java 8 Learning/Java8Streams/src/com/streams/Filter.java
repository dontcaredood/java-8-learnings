package com.streams;

import com.sandy.data.StreamData;
import com.sandy.model.Employee;

import java.util.List;

public class Filter {
    public static void main(String[] args) {
        StreamData s = new StreamData();
        List<Employee> data = s.employees;

        data.forEach(System.out::println);
        data.stream().filter(anyMatch(e->e.getAddress().equals("Chennai"))).



    }
}
