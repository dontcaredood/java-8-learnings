package com.sandy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;


public class TestPerformance {
	
	public class LtpData{
		private String ticker;
		
		private double ltp;

		public LtpData(String ticker, double ltp) {
			this.ticker = ticker;
			this.ltp = ltp;
		} 
		
		public String getTicker() {
			return ticker;
		}

		public void setTicker(String ticker) {
			this.ticker = ticker;
		}

		public double getLtp() {
			return ltp;
		}

		public void setLtp(double ltp) {
			this.ltp = ltp;
		}
	}

	public static List<LtpData> getLTP(List<String> tickerList) throws IOException {
		List<LtpData> ltpList = new ArrayList<LtpData>();
		try {
			for (String ticker : tickerList) {

				ltpList.add(new LtpData(ticker, getStockLTP(ticker)));
			}
			return ltpList;

		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}

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
			if (responseCode == HttpURLConnection.HTTP_OK) {
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

					String ltp_temp = ltpString.substring(ltpString.indexOf(":\"") + 2, ltpString.length() - 1);
					ltp = Double.parseDouble(ltp_temp);

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
