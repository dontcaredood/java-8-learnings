import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class Test {
	public static void main(String[] args) {
		List<Integer> input = new ArrayList();
		input.add(4);
		input.add(6);
		input.add(10);
		input.add(8);
		input.add(2);
		input.add(1);
		System.out.println(minimizeMemory(input, 3));
	}
	static int minimizeMemory(List<Integer> processes, int m) {
		List<Integer> temp = processes;
		int max = processes.stream().max(Comparator.comparing(Integer::valueOf)).get();
		int index = processes.indexOf(max);
		int count = 0;
		System.out.println(temp);
		for(int i=0;i<m;i++) {
			int a = m-1;
			if(i==0) {
				temp.remove(index);
			}
			System.out.println(temp);
		}
		int result = temp.stream().reduce(0, Integer::sum);
		System.out.println(temp);
		return result;
	}
}
