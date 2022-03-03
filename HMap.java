import java.util.HashMap;
import java.util.Map.Entry;
import java.util.Collections;

public class HMap{
    public static void main(String args[]) {
        String [] student = {"study", "school", "grades", "entrance", "exam"};
        String [] gaming = [“console”,”sony”,"microsoft,"xbox","microtransaction","csgo","pc","halo","playstation","tlos","insomniac","game","xbox360","psn","psx",nintendo,mario,kirby,link,zelda,squaresoft,controller,gamepad,atari,simulation,vr,proton,steam,fps,dlss,amd,nvidia,steamdeck,gpd,switch,snes,nes,sega,sonic,yakuza,peach,ganon,contra,castlevania,rts,metroid,samus,gameboy,ds,3ds,gba,lynx,vn,ps4,ps2,ps1,dk,ori,silksong,sekiro,bloodborne,hades,bastion,supergiant,bandai,ubisoft,ezio,templar,ac,rayman,emulation,kojima,metroidvania,ff,"ff7,"ffvi","ffv","ffiv,"psp,"psvita,"persona","atlas","pokemon",  ]

        HashMap<String,Integer> Student = new HashMap<String, Integer>();//HashMap containing keywords for student occupation
        // Will need hashmap for each occupation
        HashMap<String,Integer> Occupation = new HashMap<String, Integer>();//Hash map with words for each occupation
        Occupation.put("student", 0);
        Occupation.put("others",0);
        for(int i=0; i<student.length; i++){
            Student.put(student[i],0);
        }
        String a = "Hello exam fal grades high fall autumn school avatar map nine";/*Will be fetched from file in final code.
        * need to convert to lower case
        */
        for(String x: a.split(" ")){
            if(Student.containsKey(x)){
                int n = Student.get(x) + 1;
                Student.put(x, n);
                int c = Occupation.get("student") + 1; //increase corresponding entry in 'Occupation'
                Occupation.put("student", c);
            }
        }
        for (int i = 0; i < student.length; i++) {
            System.out.println(Student.get(student[i]));
        }
        int maxValue = Collections.max(Occupation.values());//Frequency of max occupation
        //iterate through map to find key:
        for(Entry<String, Integer> entry : Occupation.entrySet()){

            if(entry.getValue() == maxValue) {
                System.out.println(entry.getKey());
            }
        }
    }
}
