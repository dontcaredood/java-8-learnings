package com.sandy.streams;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class ThisToThat {
    public static void main(String[] args) throws IOException {
         Stream<String> passData = Files.lines(Paths.get("src/document.txt"));
        Map<String, String> composed = new HashMap<>();
        composed = passData.map(x->x.split(","))
                .collect(Collectors.toMap(
                        x->x[0],
                        x->x[1]
                ));


        Stream<String> dataCsv = Files.lines(Paths.get("src/document.txt")).sorted();
        Map<String, String> map = new HashMap<>();
        map = dataCsv.map(x->x.split(","))

                .collect(Collectors.toMap(
                        x -> x[0],
                        x-> x[1]));

        map.forEach((x,y)-> System.out.println(x+" "+y));
    }
}
