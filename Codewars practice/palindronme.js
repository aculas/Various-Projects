// One type of solution
function isPalindrome(str) {
  str = str.toString().toLowerCase();
  let len = str.length;
  for (let i = 0; i < len / 2; i++)
    if (str[i] !== str[len - 1 - i]) {
      return "is not a palindrome";
    }
  return "is a palindrome";
}

function palindrome(str) {
  let re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, "");
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    // This means a string of length 10, has chars between 0-9, not 1-10. The -i is what the value of i is at the time.
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

// second solution using a while loop

function isPalindrome2(str) {
  // converts any non string to a string and then converts to lowercase
  str = str.str.toString().toLowerCase();
  // Starting value
  let a = 0;
  let b = str.length;

  while (a < b) {
    if (str[a] !== str[b - 1]) return false;
    // here the starting values shift up by one(a) and down the length  by one(b)
    a++;
    b--;
  }
  return true;
}
