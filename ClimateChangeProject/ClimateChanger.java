import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Scanner;

public class ClimateChanger {
      public static void main(String[] args) throws IOException {
            System.out.println("Fetching website data...");
            URL url = new URL("https://climate.nasa.gov/");

            Scanner scan = new Scanner(url.openStream());

            ArrayList<String> words = new ArrayList<String>();

            while(scan.hasNext()) {
                  words.add(scan.next());
            }

            System.out.println("Length of the array: " + words.size());
            System.out.println("Contents of the webpage: " + words.toString().replaceAll("<[^>]*>", ""));
            System.out.println("\n\n\n ~~~~~~~~~ END OF WEBSITE TEXT ~~~~~~~~~~~");

            int counter = 0;

            // For future iterations, could make this an array with a nested for loop
            String testKey = "Climate";

            for(int i = 0; i < words.size(); i++) {
                  if(words.get(i).equalsIgnoreCase(testKey)) {
                        counter++;
                  }
            }

            System.out.println(counter + " matches were found for the word: " + testKey + "!");
      }
}