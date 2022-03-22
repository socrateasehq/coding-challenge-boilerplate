//User Boilerplate
import java.util.Scanner;

class Solution {
    public Character firstChar(String input) {
        //Write your code here
    }
}

//Compiler Boilderplate
class Driver{
    public static void main(String args[]){
        Scanner scanner = new Scanner(System.in);
        String myString = scanner.next();
        scanner.close();

        Solution sol = new Solution();
        System.out.print(Character.toString(sol.firstChar(myString)));
    }
}