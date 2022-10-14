package com.functionalProgamming;

public class LambdaDemo {

    public static void main(String[] args) {
        Lambda lambda1 = new Lambda() {
            @Override
            public void print(String name) {
                System.out.println(name);
            }
        };
        lambda1.print("Hello World");
        Lambda lambda2 = s-> System.out.println(s);
        lambda2.print("Hello World");
        lambda2.hi();
        lambda2.helo();
        lambda2.bye();
    }
    @FunctionalInterface
    interface Lambda{
        void print(String name);
        default void hi(){
            System.out.println("hi");
        }
        default void helo(){
            System.out.println("hello");
        }
        default void bye(){
            System.out.println("bye");
        }
    }
}
