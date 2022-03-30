package lambdaExpressions.java7;

public class Greeter {
    public static void main(String[] args) {
        Greeter greeter = new Greeter();
        HelloWorldGreeting h = new HelloWorldGreeting();
        greeter.greet(h);
        MillowWorldGreeting m = new MillowWorldGreeting();
        greeter.greet(m);
    }

    public void greet(Greeting greeting) {
        greeting.perform();
    }
}
