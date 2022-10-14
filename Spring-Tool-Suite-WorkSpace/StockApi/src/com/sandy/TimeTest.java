package com.sandy;

import java.text.*;
import java.time.LocalTime;
import java.util.Calendar;
import java.util.Date;
import java.util.concurrent.TimeUnit;

public class TimeTest {
	public static void main(String[] args) throws ParseException {
		Date current = new Date();
		Calendar cal = Calendar.getInstance();
		Format f = new SimpleDateFormat("MM/dd/yy");
	    String currentDate = f.format(current);
		//String currentDate = current.toString();
	    String sDate1="31/12/1997";  
	    String sDate2="31/12/1998";  
	    Date date1 = new SimpleDateFormat("MM/dd/yyyy").parse(sDate1);  
		Date date2 = new SimpleDateFormat("MM/dd/yyyy").parse(sDate2);  
		long difference_In_Time = date2.getTime() - date1.getTime();
		long difference_In_Days = TimeUnit.MILLISECONDS.toDays(difference_In_Time);
		//return (int) difference_In_Days;
		System.out.println(difference_In_Days);
	}
}
