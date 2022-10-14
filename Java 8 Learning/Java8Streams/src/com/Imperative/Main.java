package com.Imperative;

import java.util.ArrayList;
import java.util.List;

import static com.Imperative.Main.GENDER.FEMALE;
import static com.Imperative.Main.GENDER.MALE;

public class Main {
    public static void main(String[] args) {
        List<Person> people = List.of(
                new Person("Santhosh",MALE),
                new Person("Bazeer", MALE),
                new Person("Panda", FEMALE),
                new Person("Hamsa", FEMALE)
        );

        //To filter only female person
        List<Person> females = new ArrayList<>();
        for (Person person : people){
            if(person.gender.equals(FEMALE)){
                females.add(person);
            }
        }
        System.out.println(females);
    }
    public static class Person{
        private final String name;
        private final GENDER gender;

        public Person(String name, GENDER gender) {
            this.name = name;
            this.gender = gender;
        }

        @Override
        public String toString() {
            return "Person{" +
                    "name='" + name + '\'' +
                    ", gender=" + gender +
                    '}';
        }
    }
    enum GENDER{
        MALE, FEMALE
    }
}
