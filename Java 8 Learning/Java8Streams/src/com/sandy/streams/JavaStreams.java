package com.sandy.streams;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class JavaStreams {
    public static void main(String[] args) throws IOException {
        //1. Integer Stream
        IntStream.range(1,10).forEach(System.out::print);
        System.out.println();

        //2. Integer Stream with Skip
        //Skips first 3 values from the stream
        IntStream.range(1,10).skip(3).forEach(System.out::print);
        System.out.println();

        //3. Integer Stream with Sum
        int result = IntStream.range(1,10).sum();
        System.out.println(result);
        System.out.println();

        //4. Stream.of, sorted & findFirst
        Stream.of("Santhos","Sanjay","Sangeeth").sorted().findFirst().ifPresent(System.out::println);
        System.out.println();

        //5. Stream from Array, sorted, filter, print
        String[] names = {"Abu","Zendaya","Tom","Mark","Tony","Thangam","Charlie"};
        Arrays.stream(names).filter(s -> s.startsWith("T")).sorted().forEach(System.out::println);
        System.out.println();

        //6. Average of squares of an int array
        Arrays.stream(new int[] {2,3,4,6,7,9}).map(x->x*x).average().ifPresent(System.out::println);
        System.out.println();

        //7. Stream from List, filter and print
        Arrays.stream(names).map(String::toUpperCase).filter(x->x.startsWith("A")).forEach(System.out::println);
        System.out.println();

        //8. Stream rows from text file, sort, filter and print
        Stream<String> bands = Files.lines(Paths.get("src/bands.txt"));
        bands.map(String::toUpperCase)
                .sorted()
                .filter(a->a.length() >13)
                .forEach(System.out::println);
        bands.close();
        System.out.println();
        //9. Stream rows from file and save to list
        List<String> bandsList = Files.lines(Paths.get("src/bands.txt")).map(String::toLowerCase).toList();
        System.out.print(bandsList);
        bandsList.forEach(System.out::println);
        System.out.println();
        //We can use Collectors.toList() also for converting stream to list.

        //10. Stream rows from CSV file and count;
        Stream<String> csvData = Files.lines(Paths.get("src/data.txt"));
        int count = (int) csvData.map(x->x.split(",")).filter(x->x.length==3).count();
        System.out.println(count);
        //csvData.map(x->x.split(",")).forEach(System.out::println);
        csvData.close();
        System.out.println();

        //11. Stream rows from csv file and parse data from rows
        Stream<String> csvData2 = Files.lines(Paths.get("src/data.txt"));
        csvData2.map(x->x.split(",")).filter(x-> x.length==3).filter(x->Integer.parseInt(x[1])>15)
                .forEach(x-> System.out.println("Value -> "+x[0]+" "+x[1]+" "+x[2]));
        csvData2.close();
        System.out.println();

        //12. Stream rows from csv file and parse data to hashmap
        Stream<String> csvData3 = Files.lines(Paths.get("src/data.txt"));
        Map<String, Integer> map = new HashMap<>();
        map = csvData3.map(x->x.split(","))
                .filter(x->x.length==3)
                .collect(Collectors.toMap(
                        x -> x[0],
                        x-> Integer.parseInt(x[1])));

        map.forEach((x,y)-> System.out.println(x+" "+y));

        //12. Reduce - Sum
        Double total = Stream.of(1.4,3.6,7.9).reduce(0.0, Double::sum);
        System.out.println(total);

        //13. Reduce - SummaryStatistics
        IntSummaryStatistics intSummaryStatistics = IntStream.of(1,5,2,76,35,72).summaryStatistics();
        System.out.println(intSummaryStatistics);


    }


}
