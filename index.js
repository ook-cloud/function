/* ============================================================
   LESSON 7 — FUNCTIONS: EXERCISES + TEST CASES  (EASY EDITION)
   ------------------------------------------------------------
   You already know variables, operators, if, loops, and strings.
   Now you wrap that work in a NAME you can reuse: a function.
   This file is the functions twin of lesson-6-loops-tests-easy.js.

   How to use:
   - Read the exercise, then write your function in the blank
     space under it (where you see  // your code here).
   - Each exercise tells you the EXACT function name to use and
     what it should RETURN. Write the function in the blank, then
     the test call is sitting right below it, COMMENTED OUT:
         // console.log(sayHi());
     When you finish that exercise, delete the leading "// " to
     turn the call back on, run the file, and check the output.
   - Leaving the rest commented means a blank exercise never
     crashes the file — only the lines you switch on actually run.
     So you can do the exercises in ANY order, one at a time.
   - Each exercise has 3 TEST CASES: an INPUT (the call) -> the
     EXACT value you should get back. Run the file
     (node lesson-7-functions-tests-easy.js) and compare.
   - All 3 match = exercise correct.

   Rules: NO arrays. Inside a function you MAY use everything from
   lesson 6 — variables, data types, operators (% && || !), if,
   loops, strings, String()/Number()/isNaN, Math.floor(x).

   THE ONE BIG RULE: a function gives back a value with `return`.
   `return` is NOT the same as console.log. console.log PRINTS to
   the screen; return HANDS THE VALUE BACK to whoever called the
   function. These exercises want you to RETURN, then we log it.

   NOTE: every exercise uses a DIFFERENT function name, so all your
   answers can live in this one file with no clashes.

   The two shapes:
     function add(a, b) { return a + b; }     // declaration
     const add = (a, b) => a + b;             // arrow (same thing)
   ============================================================ */

/* ============================================================
   PART A — DECLARE & CALL (no parameters yet)
   ============================================================ */

// ----- 1. Return a greeting -----
// Write a function `sayHi` that takes NO input and RETURNS the string "Hi!".

function sayHi() {
  return "Hi!";
}
console.log(typeof sayHi());
// TEST 1:  sayHi()  ->  "Hi!"
// TEST 2:  sayHi()  ->  "Hi!"   (a function returns the same thing every call)
// TEST 3:  typeof sayHi()  ->  "string"

// ----- 2. Return a number -----
// Write a function `luckyNumber` that takes NO input and RETURNS the number 7.

function luckyNumber() {
  return 7;
}
console.log(luckyNumber() + 1);
// TEST 1:  luckyNumber()      ->  7
// TEST 2:  luckyNumber() + 1  ->  8     (you get a real number back, so math works)
// TEST 3:  luckyNumber() * 2  ->  14

// ----- 3. return vs console.log -----
// Write a function `giveFive` that RETURNS 5 (do NOT console.log inside it).
// The point: returning lets the caller use the value. Logging only shows it.

function giveFive() {
  return 5;
}
console.log(giveFive() + giveFive());
// TEST 1:  giveFive()               ->  5
// TEST 2:  giveFive() + giveFive()  ->  10
// TEST 3:  giveFive() > 3           ->  true

/* ============================================================
   PART B — ONE PARAMETER (input -> output)
   ============================================================ */

// ----- 4. Double it -----
// Write `double(n)` that RETURNS n times 2.

function double(n) {
  return n * 2;
}
console.log(double(4));
// TEST 1:  double(4)   ->  8
// TEST 2:  double(0)   ->  0
// TEST 3:  double(-3)  ->  -6

// ----- 5. Square it -----
// Write `square(n)` that RETURNS n times n.

function square(n) {
  return n * n;
}
console.log(square(5));
// TEST 1:  square(5)  ->  25
// TEST 2:  square(1)  ->  1
// TEST 3:  square(0)  ->  0

// ----- 6. Is it even? -----
// Write `isEven(n)` that RETURNS true when n is even, false when odd.
// Hint: n % 2 === 0.

function isEven(n) {
  if (n % 2 === 0) return true;
  else {
    return false;
  }
}
console.log(isEven(10));
// TEST 1:  isEven(10)  ->  true
// TEST 2:  isEven(7)   ->  false
// TEST 3:  isEven(0)   ->  true

// ----- 7. Absolute value -----
// Write `absValue(n)` that RETURNS n without its sign (negatives become positive).
// Hint: if n < 0 return -n; else return n.  (Do NOT use Math.abs — build it yourself.)

function absValue(n) {
  if (n < 0) {
    return -n;
  } else {
    return n;
  }
}
console.log(absValue(-9));
// TEST 1:  absValue(-9)  ->  9
// TEST 2:  absValue(9)   ->  9
// TEST 3:  absValue(0)   ->  0

// ----- 8. Last digit -----
// Write `lastDigit(n)` that RETURNS the last digit of a non-negative integer.
// Hint: n % 10.

function lastDigit(n) {
  let last = n % 10;
  return last;
}
console.log(lastDigit(7384));
// TEST 1:  lastDigit(7384)  ->  4
// TEST 2:  lastDigit(50)    ->  0
// TEST 3:  lastDigit(9)     ->  9

/* ============================================================
   PART C — TWO+ PARAMETERS
   ============================================================ */

// ----- 9. Add two numbers -----
// Write `add(a, b)` that RETURNS a + b.

function add(a, b) {
  return a + b;
}
console.log(add(3, 4));
// TEST 1:  add(3, 4)    ->  7
// TEST 2:  add(-2, 2)   ->  0
// TEST 3:  add(10, 100) ->  110

// ----- 10. Bigger of two -----
// Write `maxOf(a, b)` that RETURNS the larger of a and b (return a if equal).

function maxOf(a, b) {
  if (a < b) {
    return b;
  } else if (a > b) {
    return a;
  } else {
    return "equal";
  }
}

console.log(maxOf(8, 3));
// TEST 1:  maxOf(8, 3)   ->  8
// TEST 2:  maxOf(2, 20)  ->  20
// TEST 3:  maxOf(5, 5)   ->  5

// ----- 11. Is a multiple? -----
// Write `isMultiple(n, factor)` that RETURNS true if n divides evenly by factor.
// Hint: n % factor === 0.

function isMultiple(n, factor) {
  if (n % factor === 0) {
    return true;
  } else return false;
}
console.log(isMultiple(15, 2));
// TEST 1:  isMultiple(15, 3)  ->  true
// TEST 2:  isMultiple(15, 4)  ->  false
// TEST 3:  isMultiple(10, 5)  ->  true

// ----- 12. Clamp a grade -----
// Write `passOrFail(score, passMark)` that RETURNS "Pass" if score >= passMark, else "Fail".

function passOrFail(score, passMark) {
  if (score >= passMark) return "pass!";
  else {
    return "fail";
  }
}
console.log(passOrFail(7, 60));
// TEST 1:  passOrFail(72, 60)  ->  "Pass"
// TEST 2:  passOrFail(50, 60)  ->  "Fail"
// TEST 3:  passOrFail(60, 60)  ->  "Pass"

/* ============================================================
   PART D — DEFAULT VALUES & SMALL LOGIC
   ============================================================ */

// ----- 13. Greet by name (default) -----
// Write `greet(name = "friend")` that RETURNS "Hello, " + name + "!".
// If called with no argument it uses "friend".

function greet(name = "friend") {
  return "hello, " + name + "!";
}
console.log(greet("a"));
// TEST 1:  greet("Sam")  ->  "Hello, Sam!"
// TEST 2:  greet()       ->  "Hello, friend!"
// TEST 3:  greet("A")    ->  "Hello, A!"

// ----- 14. Apply tax (default rate) -----
// Write `withTax(price, rate = 0.1)` that RETURNS price + price * rate.

function withTax(price, rate = 0.1) {
  return price + price * rate;
}
console.log(withTax(100));
// TEST 1:  withTax(100)       ->  110
// TEST 2:  withTax(100, 0.2)  ->  120
// TEST 3:  withTax(0)         ->  0

// ----- 15. Sign of a number -----
// Write `signOf(n)` that RETURNS "positive", "negative", or "zero".

function signOf(n) {
  if (n > 0) {
    return "positive";
  } else if (n < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

console.log(signOf(-4));
// TEST 1:  signOf(-4)  ->  "negative"
// TEST 2:  signOf(4)   ->  "positive"
// TEST 3:  signOf(0)   ->  "zero"

// ----- 16. Min of three -----
// Write `minOfThree(a, b, c)` that RETURNS the smallest of the three.

function minOfThree(a, b, c) {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else {
    return c;
  }
}
console.log(minOfThree(5, 9, 9));

// TEST 1:  minOfThree(5, 2, 9)  ->  2
// TEST 2:  minOfThree(7, 7, 7)  ->  7
// TEST 3:  minOfThree(3, 1, 1)  ->  1

/* ============================================================
   PART E0 — LOOP WARM-UPS  (build a loop, return one value)
   First taste of putting a loop INSIDE a function. The loop does
   the work; `return` hands back the finished result.
   ============================================================ */

// ----- L1. Count up to a string -----
// Write `countUp(n)` that RETURNS "1 2 3 ... n" — the numbers 1..n joined by single spaces.
// Hint: result = ""; loop i = 1..n, add i (and a space) each turn; trim the trailing space at the end
//       OR add a space BEFORE every number except the first.

function countUp(n) {
  let result = "";
  for (i = 1; i <= n; ++i) {
    result += i + " ";
  }
  return result;
}
console.log(countUp(5));
// TEST 1:  countUp(5)  ->  "1 2 3 4 5"
// TEST 2:  countUp(1)  ->  "1"
// TEST 3:  countUp(3)  ->  "1 2 3"

// ----- L2. Count down with a while loop -----
// Write `countDown(n)` that RETURNS "n n-1 ... 1 Go!" using a WHILE loop (not for).
// Hint: let i = n; while (i >= 1) { ...; i--; } then add "Go!".

function countDown(n) {
  let result = " ";
  let i = n;
  while (i >= 1) {
    result += i + " ";
    i--;
  }
  return result + "Go!";
}

console.log(countDown(3));
// TEST 1:  countDown(3)  ->  "3 2 1 Go!"
// TEST 2:  countDown(1)  ->  "1 Go!"
// TEST 3:  countDown(5)  ->  "5 4 3 2 1 Go!"

// ----- L3. Sum a range -----
// Write `sumRange(a, b)` that RETURNS a + (a+1) + ... + b. Assume a <= b. Loop inside.

function sumRange(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log("----l3----");
console.log(sumRange(3, 6));
// TEST 1:  sumRange(3, 6)   ->  18    (3 + 4 + 5 + 6)
// TEST 2:  sumRange(1, 5)   ->  15
// TEST 3:  sumRange(4, 4)   ->  4

// ----- L4. Repeat a string -----
// Write `repeatStr(word, times)` that RETURNS word stuck together `times` times. Loop inside.
// Hint: result = ""; loop `times` -> result = result + word.  (Do NOT use word.repeat — build it.)

function repeatStr(word, times) {
  let result = "";

  for (i = 1; i <= times; i++) result = result + word;
  return result;
}
console.log("-----l4-----");
console.log(repeatStr("ab", 3));

// TEST 1:  repeatStr("ab", 3)  ->  "ababab"
// TEST 2:  repeatStr("x", 5)   ->  "xxxxx"
// TEST 3:  repeatStr("hi", 1)  ->  "hi"

// ----- L5. Count multiples in a range -----
// Write `countMultiples(n, k)` that RETURNS how many numbers from 1..n divide evenly by k.
// Hint: loop 1..n, if (i % k === 0) count++.
function countMultiples(n, k) {
  let count = 0;
  for (i = 1; i <= n; i++) {
    if (i % k === 0) {
      count++;
    }
  }
  return count;
}
console.log(countMultiples(50, 3));
// TEST 1:  countMultiples(50, 3)  ->  16
// TEST 2:  countMultiples(10, 5)  ->  2
// TEST 3:  countMultiples(2, 3)   ->  0

/* ============================================================
   PART E — FUNCTIONS THAT LOOP INSIDE
   (the loop lives INSIDE the function; the function returns one value)
   ============================================================ */

// ----- 17. Sum 1 to n -----
// Write `sumTo(n)` that RETURNS 1 + 2 + ... + n. Use a loop inside.
function sumTo(n) {
  let sum = 0;
  for (i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(100));
// TEST 1:  sumTo(100)  ->  5050
// TEST 2:  sumTo(10)   ->  55
// TEST 3:  sumTo(1)    ->  1

// ----- 18. Factorial -----
// Write `factorial(n)` that RETURNS 1 * 2 * ... * n (factorial(0) is 1).

function factorial(n) {
  let result = 1;
  for (i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

// TEST 1:  factorial(5)  ->  120
// TEST 2:  factorial(3)  ->  6
// TEST 3:  factorial(0)  ->  1

// ----- 19. Count vowels -----
// Write `countVowels(word)` that RETURNS how many vowels (a,e,i,o,u) are in a lowercase word.
// Hint: loop the chars; "aeiou".includes(word[i]).
function countVowels(word) {
  let count = 0;
  const vowels = "aeiou";

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("javascript"));

// TEST 1:  countVowels("javascript")  ->  3
// TEST 2:  countVowels("aeiou")       ->  5
// TEST 3:  countVowels("xyz")         ->  0

// ----- 20. Reverse a string -----
// Write `reverse(word)` that RETURNS the word backwards.
// Hint: result = ""; loop and do result = word[i] + result.

function reverse(word) {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}
console.log(reverse("code"));

// TEST 1:  reverse("code")  ->  "edoc"
// TEST 2:  reverse("abc")   ->  "cba"
// TEST 3:  reverse("x")     ->  "x"

/* ============================================================
   PART F — COMPOSE: CALL ONE FUNCTION FROM ANOTHER
   (a function can call a function you already wrote above)
   ============================================================ */

// ----- 21. Quadruple (reuse double) -----
// Write `quadruple(n)` that RETURNS n times 4 BY CALLING `double` twice.
// Hint: return double(double(n)).

function double(n) {
  return n * 2;
}
function quadruple(n) {
  return double(double(n));
}
console.log(quadruple(3));
// TEST 1:  quadruple(3)  ->  12
// TEST 2:  quadruple(0)  ->  0
// TEST 3:  quadruple(5)  ->  20

// ----- 22. Sum of squares (reuse square) -----
// Write `sumOfSquares(n)` that RETURNS square(1) + square(2) + ... + square(n).
// Call your `square` from exercise 5 inside the loop.

function sumOfSquares(n) {
  let square = 0;
  for (i = 1; i <= n; i++) {
    console.log(i, "i");
    square += i * i;
    console.log(square, "squaresquare");
  }
  return square;
}
console.log(sumOfSquares(3));
// TEST 1:  sumOfSquares(3)  ->  14    (1 + 4 + 9)
// TEST 2:  sumOfSquares(1)  ->  1
// TEST 3:  sumOfSquares(5)  ->  55    (1 + 4 + 9 + 16 + 25)

// ----- 23. Both even? (reuse isEven) -----
// Write `bothEven(a, b)` that RETURNS true only if a AND b are both even.
// Call your `isEven` from exercise 6.
function bothEven(a, b) {
  return a % 2 === 0 && b % 2 === 0;
}
console.log(bothEven(4, 8));
// TEST 1:  bothEven(4, 8)  ->  true
// TEST 2:  bothEven(4, 7)  ->  false
// TEST 3:  bothEven(3, 9)  ->  false

/* ============================================================
   PART G — LEETCODE-STYLE (EASY)  (return the answer; no arrays)
   Same tools: loops, if, %, Math.floor, strings — wrapped in a
   function that RETURNS the result instead of logging it.
   ============================================================ */

// ----- E1. Sum of Digits -----
// Write `sumDigits(n)` that RETURNS the sum of the digits of a non-negative integer.
// Hint: while n > 0 -> add (n % 10) to a total, then n = Math.floor(n / 10).

function sumDigits(n) {
  let sum = 0;

  while (n > 0) {
    sum += n % 10; // Get the last digit
    n = Math.floor(n / 10); // Remove the last digit
  }

  return sum;
}
console.log(sumDigits(4825));

// EXAMPLE 1:  sumDigits(4825)  ->  19     (4 + 8 + 2 + 5)
// EXAMPLE 2:  sumDigits(60)    ->  6      (6 + 0)
// EXAMPLE 3:  sumDigits(7)     ->  7

// ----- E2. Power  (two inputs — build it with a loop)  (LeetCode 50 lite) -----
// Write `power(base, exp)` that RETURNS base raised to exp, for exp >= 0.
// Hint: result = 1; loop `exp` times -> result = result * base.  (Do NOT use ** or Math.pow.)
// Note: power(anything, 0) is 1.

function power(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}
console.log(power(2, 5));

// EXAMPLE 1:  power(2, 5)  ->  32    (2×2×2×2×2)
// EXAMPLE 2:  power(5, 0)  ->  1     (anything to the 0 is 1)
// EXAMPLE 3:  power(3, 3)  ->  27

// ----- E3. Digit Spread (biggest digit minus smallest digit) -----
// Write `digitSpread(n)` -> the largest digit MINUS the smallest digit of a
// non-negative integer. Peel digits with % 10 and Math.floor(/10) while
// tracking BOTH a running max and a running min.
// Hint: start hi = 0, lo = 9; for each digit d -> if (d > hi) hi = d; if (d < lo) lo = d.

function digitSpread(n) {
  let high = 0;
  let low = 9;
  while (n > 0) {
    let d = n % 10;
    if (d > high) {
      high = d;
    }
    if (d < low) {
      low = d;
    }
    n = Math.floor(n / 10);
  }
  return high - low;
}
console.log(digitSpread(364));

// EXAMPLE 1:  digitSpread(364)  ->  3    (max 6, min 3)
// EXAMPLE 2:  digitSpread(70)   ->  7    (max 7, min 0)
// EXAMPLE 3:  digitSpread(5)    ->  0    (one digit: max == min)

// ----- E4. Reverse a Number (positive only) -----
// Write `reverseNumber(n)` that RETURNS a positive integer's digits reversed.
// Hint: result = 0; while n > 0 -> result = result * 10 + (n % 10), n = Math.floor(n/10).

function reverseNumber(n) {
  let reversed = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    reversed = reversed * 10 + lastDigit; // Shift left and add the digit
    n = Math.floor(n / 10);
  }
  return reversed;
}
console.log(reverseNumber(4071));

// EXAMPLE 1:  reverseNumber(4071)  ->  1704
// EXAMPLE 2:  reverseNumber(90)    ->  9     (09, leading zero drops)
// EXAMPLE 3:  reverseNumber(6)     ->  6

// ----- E5. Power of Any Base  (two inputs — generalises Power of Two) -----
// Write `isPowerOf(n, base)` -> true if positive n is base^0, base^1, base^2, ...
// (so 1, base, base*base, ...), else false. base is >= 2.
// Hint: while n % base === 0 -> n = n / base; it is a power of base if you end at exactly 1.

function isPowerOf(n, base) {
  while (n % base === 0) {
    n = n / base;
  }

  if (n === 1) {
    return true;
  } else {
    return false;
  }
}
console.log(isPowerOf(27, 3));

// EXAMPLE 1:  isPowerOf(27, 3)  ->  true    (3×3×3)
// EXAMPLE 2:  isPowerOf(1, 5)   ->  true    (base^0 = 1)
// EXAMPLE 3:  isPowerOf(12, 2)  ->  false   (12 = 2×2×3, the 3 ruins it)

// ----- E6. Decimal to Binary string -----
// Write `toBinary(n)` -> the binary form of a positive integer, AS A STRING.
// Same peeling as bit-counting, but instead of counting the 1s you PREPEND each bit.
// Hint: result = ""; while n > 0 -> result = (n % 2) + result, then n = Math.floor(n / 2).
// your code here

// console.log(toBinary(11));
// EXAMPLE 1:  toBinary(11)  ->  "1011"
// EXAMPLE 2:  toBinary(8)   ->  "1000"
// EXAMPLE 3:  toBinary(1)   ->  "1"

// ----- E7. Sqrt(x) — integer part  (LeetCode 69) -----
// Write `mySqrt(n)` -> the integer part of the square root of a non-negative integer.
// Hint: loop i = 1 upward while i * i <= n; the answer is the last i that fit.
// your code here

// console.log(mySqrt(26));
// EXAMPLE 1:  mySqrt(26)  ->  5    (5²=25 ≤ 26, 6²=36 > 26)
// EXAMPLE 2:  mySqrt(49)  ->  7
// EXAMPLE 3:  mySqrt(2)   ->  1    (1²=1 ≤ 2, 2²=4 > 2)

// ----- E8. Valid Perfect Square  (LeetCode 367) -----
// Write `isPerfectSquare(n)` -> true if a positive integer is a perfect square, else false.
// Hint: loop i = 1 upward; if i*i === n -> true; if i*i > n -> false, stop.
// your code here

// console.log(isPerfectSquare(81));
// EXAMPLE 1:  isPerfectSquare(81)   ->  true   (9×9)
// EXAMPLE 2:  isPerfectSquare(50)   ->  false
// EXAMPLE 3:  isPerfectSquare(100)  ->  true   (10×10)

// ----- E9. Count Divisors -----
// Write `countDivisors(n)` -> how many positive whole numbers divide n evenly
// (counting both 1 and n itself), for n >= 1.
// Hint: count = 0; loop i = 1..n; if (n % i === 0) count++.
// your code here

// console.log(countDivisors(12));
// EXAMPLE 1:  countDivisors(12)  ->  6    (1, 2, 3, 4, 6, 12)
// EXAMPLE 2:  countDivisors(7)   ->  2    (1, 7 — a prime has exactly 2)
// EXAMPLE 3:  countDivisors(1)   ->  1    (just 1)

// ----- E10. Collatz Steps  (the famous 3n+1 problem) -----
// Write `collatzSteps(n)` -> how many steps a positive integer takes to reach 1.
// Each step: even -> n / 2, odd -> 3 * n + 1. Count steps until n is exactly 1.
// your code here

// console.log(collatzSteps(6));
// EXAMPLE 1:  collatzSteps(6)  ->  8    (6→3→10→5→16→8→4→2→1)
// EXAMPLE 2:  collatzSteps(1)  ->  0    (already 1, no steps)
// EXAMPLE 3:  collatzSteps(7)  ->  16

// ----- E11. Fizz Buzz (return one string)  (LeetCode 412 lite) -----
// Write `fizzAt(i)` that RETURNS, for a single number i:
//   "FizzBuzz" if divisible by 3 and 5, "Fizz" if by 3, "Buzz" if by 5, else String(i).
// your code here

// console.log(fizzAt(15));
// EXAMPLE 1:  fizzAt(15)  ->  "FizzBuzz"
// EXAMPLE 2:  fizzAt(9)   ->  "Fizz"
// EXAMPLE 3:  fizzAt(7)   ->  "7"

// ----- E12. Harshad Number  (REUSE your own sumDigits from E1) -----
// A Harshad number is divisible by the SUM of its own digits.
// Write `isHarshad(n)` and CALL sumDigits(n) from E1 — do NOT re-sum the digits here.
// Hint: return n % sumDigits(n) === 0;
// your code here

// console.log(isHarshad(18));
// EXAMPLE 1:  isHarshad(18)  ->  true    (1+8=9, and 18 % 9 === 0)
// EXAMPLE 2:  isHarshad(11)  ->  false   (1+1=2, and 11 % 2 !== 0)
// EXAMPLE 3:  isHarshad(21)  ->  true    (2+1=3, and 21 % 3 === 0)

// ----- E13. Palindrome Number  (REUSE your own reverseNumber from E4)  (LeetCode 9) -----
// Write `isPalindrome(n)` -> true if a non-negative integer reads the same both ways.
// Do NOT re-derive the reverse here — CALL reverseNumber(n) from E4 and compare to n.
// Hint: return reverseNumber(n) === n;
// your code here

// console.log(isPalindrome(1331));
// EXAMPLE 1:  isPalindrome(1331)  ->  true
// EXAMPLE 2:  isPalindrome(1234)  ->  false
// EXAMPLE 3:  isPalindrome(8)     ->  true

// ----- E14. Greatest Common Divisor  (two inputs — a function's home turf) -----
// Write `gcd(a, b)` -> the biggest number that divides BOTH a and b evenly.
// Hint (easy way): loop i from 1 up to the smaller of a and b; whenever i divides
//   both a and b, remember it; the LAST such i is the answer.
// your code here

// console.log(gcd(12, 8));
// EXAMPLE 1:  gcd(12, 8)   ->  4    (1,2,4 divide both; 4 is biggest)
// EXAMPLE 2:  gcd(7, 5)    ->  1    (only 1 divides both)
// EXAMPLE 3:  gcd(9, 9)    ->  9

// ----- E15. Digital Root  (REUSE your own sumDigits from E1) -----
// Keep summing the digits until only ONE digit is left, then RETURN it.
// Write `digitalRoot(n)` and CALL `sumDigits(n)` (from E1) inside a loop.
// Hint: while n has more than one digit (n >= 10) -> n = sumDigits(n); return n.
// your code here

// console.log(digitalRoot(942));
// EXAMPLE 1:  digitalRoot(942)  ->  6    (9+4+2=15, then 1+5=6)
// EXAMPLE 2:  digitalRoot(38)   ->  2    (3+8=11, then 1+1=2)
// EXAMPLE 3:  digitalRoot(5)    ->  5    (already one digit)

/* ============================================================
   CHALLENGE (optional) — recursion preview
   ============================================================ */

// ----- Countdown string -----
// Write `countdown(n)` that RETURNS "n n-1 ... 1 Go!" as one string with single spaces.
// You may use a loop OR call countdown(n-1) inside itself (recursion). Either is fine.
// your code here

// console.log(countdown(3));
// TEST 1:  countdown(3)  ->  "3 2 1 Go!"
// TEST 2:  countdown(1)  ->  "1 Go!"
// TEST 3:  countdown(5)  ->  "5 4 3 2 1 Go!"

/* ============================================================
   All 3 tests match for an exercise = you got it right.
   Any mismatch = a bug to hunt. Happy functioning!
   ============================================================ */
// Nothing here
