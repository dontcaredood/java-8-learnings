import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class Test2 {
	public static void main(String[] args) {
		List<Integer> input = new ArrayList();
		input.add(4);
		input.add(6);
		input.add(10);
		input.add(8);
		input.add(2);
		input.add(1);
		Test2 t = new Test2();
		System.out.println(t.minimizeMemory(input, 3));
	}
	 int minimizeMemory(List<Integer> processes, int m) {
		 List<Integer> temp= processes;
		int max = processes.stream().max(Comparator.comparing(Integer::valueOf)).get();
		int index = processes.indexOf(max);
		
		temp.add(6);
		//int result = processes.stream().reduce(0, Integer::sum);
		
		return 1;
	}
}
