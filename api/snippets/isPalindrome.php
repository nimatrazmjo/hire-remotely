<?php
function isPalindrome($str) {
    //remove all spaces
    $string = str_replace(' ', '', $str);

    //remove special characters
    $string = preg_replace('/[^A-Za-z0-9\-]/', '', $string);

    //change case to lower
    $string = strtolower($string);

    //reverse the string
    $reverse = strrev($string);

    if ($string == $reverse) {
        return "Palindrome!";
    }
    else {
        return "Not a Palindrome!";
    }
}

$str = trim(fgets(STDIN));
$result = isPalindrome($str);
echo $result;
?>