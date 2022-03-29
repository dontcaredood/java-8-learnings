package lambdaExpressions;

public class LambdaDemo {
    public static void main(String[] args) {
        Lambda lambda = ()->System.out.println("HEYYA!");
        lambda.foo();
    }
}

interface Lambda{
    void foo();
}
