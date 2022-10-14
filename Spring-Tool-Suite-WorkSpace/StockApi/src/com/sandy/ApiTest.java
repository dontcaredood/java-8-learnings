package com.sandy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.*;

public class ApiTest {
	private static final String baseUrl = "https://www.google.com/finance/quote/";

	public static void main(String[] args) throws IOException {

		sendGET();
	}

	private static void getStockLTP(String tickerName) throws IOException {

		try {
			URL obj = new URL(baseUrl + tickerName + ":NSE");
			HttpURLConnection con = (HttpURLConnection) obj.openConnection();
			con.setRequestMethod("GET");
			int responseCode = con.getResponseCode();
			if (responseCode == HttpURLConnection.HTTP_OK) { // success
				BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
				String inputLine, price;
				int counter = 0;
				StringBuffer response = new StringBuffer();
				while ((inputLine = in.readLine()) != null) {
					if (inputLine.equals("// Google Inc.")) {
						counter++;
					}
					if (counter == 2 && inputLine.equals("// Google Inc.")) {
						System.out.println("inside 2");
						inputLine = in.readLine();
						response.append(inputLine);
					}
				}
				in.close();
				price = response.toString();
				String p1 = (String) price.subSequence(15800, 15900);
				String p2 = (String) price.subSequence(15900, 19600);

				System.out.println(
						p1 + '\n' + p2 + '\n' + p1.contains("data-last-price") + '\n' + p2.contains("data-last-price"));
			}else {
				System.out.println("GET request not worked");
			}
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	private static void sendGET() throws IOException {
		URL obj = new URL("https://www.google.com/finance/quote/WIPRO:NSE");
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();
		String price = "";
		con.setRequestMethod("GET");
		// con.setRequestProperty("User-Agent", USER_AGENT);
		int responseCode = con.getResponseCode();
		System.out.println("GET Response Code :: " + responseCode);
		System.out.println(con.getResponseMessage());
		if (responseCode == HttpURLConnection.HTTP_OK) { // success
			BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
			String inputLine;
			System.out.println(in);
			int counter = 0;
			StringBuffer response = new StringBuffer();
			String result = null;
			while ((inputLine = in.readLine()) != null) {
				if (inputLine.equals("// Google Inc.")) {
					counter++;
					// in.readLine();
				}
				if (counter == 2 && inputLine.equals("// Google Inc.")) {
					System.out.println("inside 2");
					inputLine = in.readLine();
					response.append(inputLine);

					// System.out.println("Result-> "+ result);
					// response.append(result);

				}

				// System.out.println(response);
			}
			in.close();
			// response.append(result);
			price = response.toString();
			// System.out.println(price);

			// data-last-price="214.3"
			// result.strip();
			String p1 = (String) price.subSequence(15800, 15900);
			String p2 = (String) price.subSequence(15900, 19600);

			System.out.println(
					p1 + '\n' + p2 + '\n' + p1.contains("data-last-price") + '\n' + p2.contains("data-last-price"));

		} else {
			System.out.println("GET request not worked");
		}

	}
}
