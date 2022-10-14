package com.hrapp;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/demo")
public class DemoController {
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String hello() {
		return "Hello World";
	}
}
