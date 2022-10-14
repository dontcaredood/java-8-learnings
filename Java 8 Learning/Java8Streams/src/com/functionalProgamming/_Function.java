package com.functionalProgamming;
import java.util.function.*;
public class _Function {
    public static void main(String[] args) {
        System.out.println("Normal Imperative Method");
        System.out.println(increment(23));
        System.out.println("Declarative Method");
        System.out.println(funIncBy1.apply(24));
        System.out.println("Adding 2 Methods using andThen");
        Double result = funIncBy1.andThen(funMulBy10).apply(10);

        System.out.println(result);
    }

    static Function<Integer, Integer> funIncBy1 = number -> number + 1;

    static Function<Integer, Double> funMulBy10 = number -> (double) (number * 10);

    static int increment(int number){
        return number+1;
    }
}
