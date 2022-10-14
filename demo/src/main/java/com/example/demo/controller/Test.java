package com.example.demo.controller;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("test/")
public class Test {
    @GetMapping(value = "getRequest")
    public String getRequestParam(@RequestParam String name){
        return name;
    }

    @GetMapping("getPath/{value}")
    public String getPathParam(@PathVariable String value){
        return value;
    }
}
