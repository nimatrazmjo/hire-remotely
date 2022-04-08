import java.util.Scanner;

class Main {
  static boolean isPalindrome(String str) {
    // your code answer
  }

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    String str = scanner.next();
    scanner.close();

    if (isPalindrome(str))
      System.out.print("1");
    else
      System.out.print("0");
  }
}