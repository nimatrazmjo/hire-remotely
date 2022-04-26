import java.util.Scanner;

class Main {
  static String isPalindrome(String str) {
    int strLength = str.length();
    String reverseStr = "";
    for (int i = (strLength - 1); i >=0; --i) {
      reverseStr = reverseStr + str.charAt(i);
    }

    if (str.toLowerCase().equals(reverseStr.toLowerCase())) {
     return "Palindrome!";
    }
    else {
      return "Not a Palindrome!";
    }
  }

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    String str = scanner.next();
    scanner.close();

    String result = isPalindrome(str);
    System.out.print(result);
  }
}