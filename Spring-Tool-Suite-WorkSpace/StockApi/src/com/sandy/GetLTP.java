package com.sandy;
 
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.time.LocalTime;
import java.util.Scanner;
import org.json.JSONObject;

public class GetLTP {
	
	private static final String baseUrl = "https://www.google.com/finance/quote/";

	public static void main(String[] args) throws IOException {
//		System.out.println("Enter Ticker Name");
//		Scanner scan = new Scanner(System.in);
//		String ticker = scan.next();
		LocalTime current = LocalTime.now();
		LocalTime marketClose = LocalTime.parse("15:30:00");
		while(current.compareTo(marketClose)!=1) {calculatePnL();}
	}
	private static void calculatePnL() throws IOException {
		Double ltp = getStockLTP("TATAMTRDVR");
		double avgPrice =  254;
		int quantity = 60;
		double pnl = quantity * (ltp - avgPrice) ;
		System.out.println("Avg\tLTP\tP/L");
		System.out.println(avgPrice+"\t"+ltp+"\t"+String.format("%.2f", pnl));
		
	}
	
	private static Double getStockLTP(String tickerName) throws IOException {
		String ltpString = "";
		String inputLine, result;
		int counter = 0;
		double ltp = 0;
		try {

			URL obj = new URL(baseUrl + tickerName + ":NSE");
			HttpURLConnection con = (HttpURLConnection) obj.openConnection();
			con.setRequestMethod("GET");
			int responseCode = con.getResponseCode();
			if (responseCode == HttpURLConnection.HTTP_OK) { // success
				BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));

				StringBuffer response = new StringBuffer();
				while ((inputLine = in.readLine()) != null) {
					if (inputLine.equals("// Google Inc.")) {
						counter++;
					}
					if (counter == 2 && inputLine.equals("// Google Inc.")) {
						inputLine = in.readLine();
						response.append(inputLine);
					}
				}
				in.close();
				result = response.toString();
				String p2 = (String) result.subSequence(15900, 16100);
				p2 = p2.replace("=", "\":");
				p2 = p2.replace("\" ", "\",\"");
				if (p2.contains("data-last-price")) {
					ltpString = p2.substring(p2.indexOf("data-last-price") - 1,
							p2.indexOf("data-last-normal-market-timestamp") - 2);
					//System.out.println(ltpString);
					
					String ltp_temp = ltpString.substring(ltpString.indexOf(":\"")+2, ltpString.length()-1);
					ltp = Double.parseDouble(ltp_temp);
					//System.out.println(ltp);
							
				} else {
					System.out.println("Error");
				}

			} else {
				System.out.println("GET request not worked");
			}
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ltp;

	}
}
