package com.microservices.order.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
public class OrderController {

    @RequestMapping(method = RequestMethod.GET, value = "/")
    public String fo(){
        return "Foo";
    }
}
