package lambdaExpressions;

public class LambdaInterference {

    public static void main(String[] args) {
        StringStrength lambda = s -> s.length();
        System.out.println(lambda.getLength("This is the string"));

    }

    interface StringStrength{
        public int getLength(String a);
    }
}
