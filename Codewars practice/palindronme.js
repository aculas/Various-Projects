// One type of solution
function isPalindrome(str) {
  let len = str.length;
  for (let i = 0; i < len / 2; i++)
    if (str[i] !== str[len - 1 - i]) {
      return "is not a palindrome";
    }
  return "is a palindrome";
}

// second solution using a while loop

function isPalindrome2(str) {
  str = str.toLowerCase();
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
