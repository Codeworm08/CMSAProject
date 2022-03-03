import java.util.HashMap;
import java.util.Map.Entry;
import java.util.Collections;
import java.io.*;

public class HMapWildlife{
    public static void main(String [] args) {
        File directory = new File("./testo.txt");
        String z="",y;
        try (BufferedReader br = new BufferedReader(new FileReader("testo.txt")))
        {
          while((y=br.readLine()) != null){
            System.out.println(z);
            z += y;
          }
        }catch(IOException exc){
          System.out.println("I/O Error: " + exc);
        }
        System.out.println(directory.getAbsolutePath());
        String [] w = {"National Geography", "Discovery Channel", "Nat Geo Wild", "desmos art of japanese dragon Ryujin"};
        HashMap<String,Integer> wild = new HashMap<String, Integer>();//HashMap containing keywords for student occupation
        // Will need hashmap for each occupation
        HashMap<String,Integer> Occupation = new HashMap<String, Integer>();//Hash map with words for each occupation
        Occupation.put("w", 0);
        Occupation.put("others",0);
        for(int i=0; i<w.length; i++){
            wild.put(w[i],0);
        }
      /*Will be fetched from file in final code.
        * need to convert to lower case
        */
        for(String x: z.split(",")){
        //  System.out.println("x: "+z);
            x = x.trim();
            if(wild.containsKey(x)){
                int n = wild.get(x) + 1;
                wild.put(x, n);
                int c = Occupation.get("w") + 1; //increase corresponding entry in 'Occupation'
                Occupation.put("w", c);
            }
        }
        for (int i = 0; i < w.length; i++) {
            System.out.println(wild.get(w[i]));
        }
        int maxValue = Collections.max(Occupation.values());//Frequency of max occupation
        //iterate through map to find key:
        for(Entry<String, Integer> entry : Occupation.entrySet()){

            if(entry.getValue() == maxValue) {
                System.out.println(entry.getKey());
            }
        }
        System.out.println(w);
        System.out.println(Occupation);
    }
}
