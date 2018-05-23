function isPalindrome (number) {
  let string = number.toString();
  if(Number(number) < 0) {
    string = string.slice(1);
  }
  let end = string.length-1;
  let start = 0;
  while(start < end) {
    if(string.charAt(start) !== string.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

console.log('1221 '+isPalindrome(1221));
console.log('12321 '+isPalindrome(12321));
console.log('125721 '+isPalindrome(125721));
console.log('1111 '+isPalindrome(1111));
console.log('1 '+isPalindrome(1));
console.log('0 '+isPalindrome(0));
console.log('12 '+isPalindrome(12));
console.log('1.1 '+isPalindrome(1.1));
console.log('12.121 '+isPalindrome(12.121));
console.log('-1 '+isPalindrome(-1));
console.log('-12 '+isPalindrome(-12));
console.log('asddsa '+isPalindrome('asddsa'));
console.log('\'\' '+isPalindrome(''));
console.log('\' \' '+isPalindrome(' '));
