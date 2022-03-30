package lambdaExpressions;

public class LambdaGreeterDemo {
    public static void main(String[] args) {
        LambdaGreeterDemo greeter = new LambdaGreeterDemo();
        Greeting interfaceImpl = new Greeting() {
            @Override
            public void performGreet() {
                System.out.println("Hello World Interface!");
            }
        };

        Greeting lambdaImpl = () -> {System.out.println("Hello World Lambda!");};

        greeter.greet(interfaceImpl);
        greeter.greet(lambdaImpl);

    }
    public void greet(Greeting greeting){
        greeting.performGreet();
    }
}

interface Greeting{
    void performGreet();
}
