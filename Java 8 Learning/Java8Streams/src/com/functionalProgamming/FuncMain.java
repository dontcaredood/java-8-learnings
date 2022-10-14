package com.functionalProgamming;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static com.functionalProgamming.FuncMain.GENDER.FEMALE;
import static com.functionalProgamming.FuncMain.GENDER.MALE;


public class FuncMain {

    public static void main(String[] args) {
        List<Person> people = List.of(new Person("Santhosh", MALE), new Person("Bazeer", MALE), new Person("Panda", FEMALE), new Person("Hamsa", FEMALE));
        //To filter only female person
        people.stream().
                filter(x -> x.gender.equals(FEMALE)).forEach(System.out::println);
    }


    public static class Person {
        private final String name;
        private final GENDER gender;

        public Person(String name, GENDER gender) {
            this.name = name;
            this.gender = gender;
        }

        @Override
        public String toString() {
            return "Person{" + "name='" + name + '\'' + ", gender=" + gender + '}';
        }
    }

    enum GENDER {
        MALE, FEMALE
    }
}
