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
   loops, strings, String()/Number()/isNaN, Math.floor(x)..

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
  square = 0;
  for (i = 1; i <= n; i++) {
    square += i * i;
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

function toBinary(n) {
  result = "";
  while (n > 0) {
    result = (n % 2) + result;
    n = Math.floor(n / 2);
  }
  return result;
}

console.log(toBinary(11));
// EXAMPLE 1:  toBinary(11)  ->  "1011"
// EXAMPLE 2:  toBinary(8)   ->  "1000"
// EXAMPLE 3:  toBinary(1)   ->  "1"

// ----- E7. Sqrt(x) — integer part  (LeetCode 69) -----
// Write `mySqrt(n)` -> the integer part of the square root of a non-negative integer.
// Hint: loop i = 1 upward while i * i <= n; the answer is the last i that fit.

function mySqrt(n) {
  i = 1;
  while (i * i <= n) {
    i++;
  }
  return i - 1;
}
console.log(mySqrt(37));
// EXAMPLE 1:  mySqrt(26)  ->  5    (5²=25 ≤ 26, 6²=36 > 26)
// EXAMPLE 2:  mySqrt(49)  ->  7
// EXAMPLE 3:  mySqrt(2)   ->  1    (1²=1 ≤ 2, 2²=4 > 2)

// ----- E8. Valid Perfect Square  (LeetCode 367) -----
// Write `isPerfectSquare(n)` -> true if a positive integer is a perfect square, else false.
// Hint: loop i = 1 upward; if i*i === n -> true; if i*i > n -> false, stop.

function isPerfectSquare(n) {
  let isPerfect = false;
  for (i = 1; i <= n; i++) {
    console.log(i);
    if (i * i === n) {
      console.log("this is true");
      isPerfect = true;
      break;
    } else if (i * i > n) {
      isPerfect = false;
      break;
    }
  }
  return isPerfect;
}

console.log(isPerfectSquare(80));
// EXAMPLE 1:  isPerfectSquare(81)   ->  true   (9×9)
// EXAMPLE 2:  isPerfectSquare(50)   ->  false
// EXAMPLE 3:  isPerfectSquare(100)  ->  true   (10×10)

// ----- E9. Count Divisors -----
// Write `countDivisors(n)` -> how many positive whole numbers divide n evenly
// (counting both 1 and n itself), for n >= 1.
// Hint: count = 0; loop i = 1..n; if (n % i === 0) count++.

function countDivisors(n) {
  let count = 0;
  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }

  return count;
}
console.log(countDivisors(12));

// EXAMPLE 1:  countDivisors(12)  ->  6    (1, 2, 3, 4, 6, 12)
// EXAMPLE 2:  countDivisors(7)   ->  2    (1, 7 — a prime has exactly 2)
// EXAMPLE 3:  countDivisors(1)   ->  1    (just 1)

// ----- E10. Collatz Steps  (the famous 3n+1 problem) -----
// Write `collatzSteps(n)` -> how many steps a positive integer takes to reach 1.
// Each step: even -> n / 2, odd -> 3 * n + 1. Count steps until n is exactly 1.

function collatzSteps(n) {
  let steps;
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    steps++;
  }

  return steps;
}
console.log(collatzSteps(6));

// EXAMPLE 1:  collatzSteps(6)  ->  8    (6→3→10→5→16→8→4→2→1)
// EXAMPLE 2:  collatzSteps(1)  ->  0    (already 1, no steps)
// EXAMPLE 3:  collatzSteps(7)  ->  16

// ----- E11. Fizz Buzz (return one string)  (LeetCode 412 lite) -----
// Write `fizzAt(i)` that RETURNS, for a single number i:
//   "FizzBuzz" if divisible by 3 and 5, "Fizz" if by 3, "Buzz" if by 5, else String(i).

function fizzAt(i) {
  if (i % 3 === 0 && i % 5 === 0) {
    return "FizzBuzz";
  } else if (i % 3 === 0) {
    return "Fizz";
  } else if (i % 5 === 0) {
    return "Buzz";
  } else {
    return String(i);
  }
}
console.log(fizzAt(15));

// EXAMPLE 1:  fizzAt(15)  ->  "FizzBuzz"
// EXAMPLE 2:  fizzAt(9)   ->  "Fizz"
// EXAMPLE 3:  fizzAt(7)   ->  "7"

// ----- E12. Harshad Number  (REUSE your own sumDigits from E1) -----
// A Harshad number is divisible by the SUM of its own digits.
// Write `isHarshad(n)` and CALL sumDigits(n) from E1 — do NOT re-sum the digits here.
// Hint: return n % sumDigits(n) === 0;
function isHarshad(n) {
  const digitSum = sumDigits(n);

  if (digitSum === 0) return false;
  return n % digitSum === 0;
}
console.log(isHarshad(18));

// EXAMPLE 1:  isHarshad(18)  ->  true    (1+8=9, and 18 % 9 === 0)
// EXAMPLE 2:  isHarshad(11)  ->  false   (1+1=2, and 11 % 2 !== 0)
// EXAMPLE 3:  isHarshad(21)  ->  true    (2+1=3, and 21 % 3 === 0)

// ----- E13. Palindrome Number  (REUSE your own reverseNumber from E4)  (LeetCode 9) -----
// Write `isPalindrome(n)` -> true if a non-negative integer reads the same both ways.
// Do NOT re-derive the reverse here — CALL reverseNumber(n) from E4 and compare to n.
// Hint: return reverseNumber(n) === n;

function isPalindrome(n) {
  return n === reverseNumber(n);
}
console.log(isPalindrome(1331));

// EXAMPLE 1:  isPalindrome(1331)  ->  true
// EXAMPLE 2:  isPalindrome(1234)  ->  false
// EXAMPLE 3:  isPalindrome(8)     ->  true

// ----- E14. Greatest Common Divisor  (two inputs — a function's home turf) -----
// Write `gcd(a, b)` -> the biggest number that divides BOTH a and b evenly.
// Hint (easy way): loop i from 1 up to the smaller of a and b; whenever i divides
//   both a and b, remember it; the LAST such i is the answer.

function gcd(a, b) {
  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}
console.log(gcd(12, 8));

// EXAMPLE 1:  gcd(12, 8)   ->  4    (1,2,4 divide both; 4 is biggest)
// EXAMPLE 2:  gcd(7, 5)    ->  1    (only 1 divides both)
// EXAMPLE 3:  gcd(9, 9)    ->  9

// ----- E15. Digital Root  (REUSE your own sumDigits from E1) -----
// Keep summing the digits until only ONE digit is left, then RETURN it.
// Write `digitalRoot(n)` and CALL `sumDigits(n)` (from E1) inside a loop.
// Hint: while n has more than one digit (n >= 10) -> n = sumDigits(n); return n.

function digitalRoot(n) {
  while (n > 9) {
    n = sumDigits(n);
  }
  return n;
}
console.log(digitalRoot(19900403));

// EXAMPLE 1:  digitalRoot(942)  ->  6    (9+4+2=15, then 1+5=6)
// EXAMPLE 2:  digitalRoot(38)   ->  2    (3+8=11, then 1+1=2)
// EXAMPLE 3:  digitalRoot(5)    ->  5    (already one digit)

/* ============================================================
   CHALLENGE (optional) — recursion preview
   ============================================================ */

// ----- Countdown string -----
// Write `countdown(n)` that RETURNS "n n-1 ... 1 Go!" as one string with single spaces.
// You may use a loop OR call countdown(n-1) inside itself (recursion). Either is fine.

function countdown(n) {
  if (n < 1) {
    return "Go!";
  }
  return n + " " + countdown(n - 1);
}
console.log(countdown(3));

// TEST 1:  countdown(3)  ->  "3 2 1 Go!"
// TEST 2:  countdown(1)  ->  "1 Go!"
// TEST 3:  countdown(5)  ->  "5 4 3 2 1 Go!"

/* ============================================================
   All 3 tests match for an exercise = you got it right.
   Any mismatch = a bug to hunt. Happy functioning!
   ============================================================ */
// Nothing here

/* ============================================================
   LESSON 8 — OBJECTS: EXERCISES + TEST CASES  (EASY EDITION)
   ------------------------------------------------------------
   You know variables, operators, if, loops, strings, and
   functions. Now you bundle related data under ONE name with
   labels: an object. A string is letters in a row; an object is
   VALUES behind KEYS you choose.

       const user = { name: "Sam", age: 20 };
       user.name        // "Sam"   (dot access — key you know)
       user["age"]      // 20      (bracket — key in a variable)

   30 exercises, easy -> hard. 1–24 build the core skills one at a
   time. 25–30 are the CHALLENGE block: LeetCode-style counting and
   a nested mini-project that makes you COMPOSE earlier ideas.

   How to use:
   - Read the exercise, write your function where you see
     // your code here. The test call sits right below, COMMENTED:
         // console.log(makeUser());
     Delete the leading "// " to switch it on, run the file, compare.
   - Blank exercises never crash the file — only switched-on lines
     run. Do the exercises in ANY order, one at a time.
   - Each exercise has 3 TEST CASES: INPUT -> the EXACT value back.
     Run: node lesson-8-objects-tests-easy.js
   - All 3 match = exercise correct.

   COMPARING OBJECTS: two different objects are NEVER === even with
   the same contents. To check an object answer by eye, the test
   shows the expected SHAPE. To check in code, compare
   JSON.stringify(yours) to JSON.stringify(expected).

   Tools you MAY use (new this lesson):
     obj.key / obj["key"]      read & write a property
     key in obj                true if that key exists
     delete obj.key            remove a property
     for (const k in obj) {}   visit every key
     Object.keys(obj)          the keys, e.g. ["name","age"]
     Object.values(obj)        the values
     { ...a, ...b }            spread: copy/merge objects
     .split(" ")               cut a sentence into words
   Plus everything from before: loops, if, %, String()/Number(),
   Math.floor, Math.max/Math.min, function, return.

   THE OBJECT RULE: a key is a LABEL, a value is what sits behind it.
   Reading a missing key gives `undefined` (not an error) — check
   with `in` before you trust a value.

   MUTATE vs COPY: setAge/addField/removeField CHANGE the object you
   pass in. copyObject/omitField/doubleValues hand back a NEW object
   and leave the original alone. Know which kind you are writing.

   NOTE: every exercise uses a DIFFERENT function name, so all your
   answers live in this one file with no clashes.
   ============================================================ */

/* ============================================================
   PART A — MAKE & READ
   ============================================================ */

// ----- 1. Build an object -----
// Write `makeUser()` that takes NO input and RETURNS the object { name: "Sam", age: 20 }.

const makeUser = () => ({ name: "Sam", age: 20 });
console.log(makeUser().name);
console.log(makeUser().age);
console.log(typeof makeUser());

// TEST 1:  makeUser().name      ->  "Sam"
// TEST 2:  makeUser().age       ->  20
// TEST 3:  typeof makeUser()    ->  "object"

// ----- 2. Read with a dot -----
// Write `getName(user)` that RETURNS the `name` property of the object passed in.

function getName(user) {
  return user.name;
}
console.log(getName({ name: "Ada", age: 30 }));
console.log(getName({ name: "Bo" }));
console.log(getName({ name: " " }));
// TEST 1:  getName({ name: "Ada", age: 30 })  ->  "Ada"
// TEST 2:  getName({ name: "Bo" })            ->  "Bo"
// TEST 3:  getName({ name: "" })              ->  ""

// ----- 3. Read with a variable key (bracket) -----
// Write `getValue(obj, key)` that RETURNS the value behind `key`. The key is in a
// variable, so you MUST use bracket access obj[key] (dot would look for "key" literally).
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue({ a: 1, b: 2 }, "b"));
console.log(getValue({ color: "red" }, "color"));
console.log(getValue({ a: 1 }, "missing"));

// TEST 1:  getValue({ a: 1, b: 2 }, "b")        ->  2
// TEST 2:  getValue({ color: "red" }, "color")  ->  "red"
// TEST 3:  getValue({ a: 1 }, "missing")        ->  undefined

/* ============================================================
   PART B — CHANGE PROPERTIES (add / update / remove / check)
   ============================================================ */

// ----- 4. Update a property -----
// Write `setAge(user, newAge)` that sets user.age to newAge and RETURNS the same user.
function setAge(user, newAge) {
  user.age = newAge;
  return user;
}
console.log(setAge({ name: "Sam", age: 20 }, 21).age);
console.log(setAge({ name: "Sam", age: 20 }, 21).name);
console.log(setAge({ age: 5 }, 0).age);

// TEST 1:  setAge({ name: "Sam", age: 20 }, 21).age  ->  21
// TEST 2:  setAge({ name: "Sam", age: 20 }, 21).name ->  "Sam"   (other keys untouched)
// TEST 3:  setAge({ age: 5 }, 0).age                 ->  0

// ----- 5. Add a property with a variable key -----
// Write `addField(obj, key, value)` that adds key = value to obj and RETURNS obj.
// Use bracket set: obj[key] = value.

function addField(obj, key, value) {
  obj[key] = value;
  return obj;
}
console.log(addField({ name: "Sam" }, "age", 20).age);
console.log(addField({}, "X", 5).X);
console.log(addField({ a: 1 }, "a", 9).a);

// TEST 1:  addField({ name: "Sam" }, "age", 20).age   ->  20
// TEST 2:  addField({}, "x", 5).x                      ->  5
// TEST 3:  addField({ a: 1 }, "a", 9).a                ->  9     (existing key gets overwritten)

// ----- 6. Remove a property -----
// Write `removeField(obj, key)` that deletes that key from obj and RETURNS obj.
// Hint: delete obj[key].
function removeField(obj, key) {
  delete obj[key];
  return obj;
}
console.log(removeField({ a: 1, b: 2 }, "a"));

// TEST 1:  "a" in removeField({ a: 1, b: 2 }, "a")     ->  false
// TEST 2:  "b" in removeField({ a: 1, b: 2 }, "a")     ->  true
// TEST 3:  removeField({ a: 1, b: 2 }, "a").b          ->  2

// ----- 7. Does the key exist? -----
// Write `hasField(obj, key)` that RETURNS true if the key exists, false otherwise.
// Hint: key in obj.  (Note: a key holding undefined still counts as existing — use `in`.)

function hasField(obj, key) {
  return key in obj;
}
console.log(hasField({ a: 1 }, "a"));

// TEST 1:  hasField({ a: 1 }, "a")        ->  true
// TEST 2:  hasField({ a: 1 }, "b")        ->  false
// TEST 3:  hasField({ a: undefined }, "a") ->  true

// ----- 8. Increment a counter field -----
// Write `incrementField(obj, key)` that adds 1 to obj[key] and RETURNS obj. If the key
// is missing, treat it as 0 first (so it becomes 1).
// Hint: obj[key] = (obj[key] || 0) + 1.

function incrementField(obj, key) {
  if (obj[key] === undefined) {
    obj[key] = 0;
  }
  obj[key] += 1;
  return obj;
}
console.log(incrementField({ a: 1 }, "a").a);

// TEST 1:  incrementField({ a: 1 }, "a").a       ->  2
// TEST 2:  incrementField({}, "new").new         ->  1     (missing key starts at 0)
// TEST 3:  incrementField({ a: 0 }, "a").a       ->  1

/* ============================================================
   PART C — NESTED, DEFAULTS, METHODS (`this`)
   ============================================================ */

// ----- 9. Reach into a nested object -----
// Write `getCity(user)` that RETURNS user.address.city (an object inside an object).

function getCity(user) {
  return user.address.city;
}
console.log(
  getCity({ name: "Sam", address: { city: "Lagos", zip: "100001" } }),
);
console.log(getCity({ address: { city: "Paris" } }));
console.log(getCity({ address: { city: "", zip: "0" } }));

// TEST 1:  getCity({ name: "Sam", address: { city: "Lagos" } })  ->  "Lagos"
// TEST 2:  getCity({ address: { city: "Paris" } })               ->  "Paris"
// TEST 3:  getCity({ address: { city: "", zip: "0" } })          ->  ""

// ----- 10. Value or fallback -----
// Write `valueOr(obj, key, fallback)` that RETURNS obj[key] if the key EXISTS, else fallback.
// Hint: if (key in obj) return obj[key]; else return fallback.

function valueOr(obj, key, fallback) {
  if (key in obj) return obj[key];
  else return fallback;
}
console.log(valueOr({ a: 1 }, "a", 0));
console.log(valueOr({ a: 1 }, "b", 0));
console.log(valueOr({ a: 0 }, "a", 99));

// TEST 1:  valueOr({ a: 1 }, "a", 0)          ->  1
// TEST 2:  valueOr({ a: 1 }, "b", 0)          ->  0
// TEST 3:  valueOr({ a: 0 }, "a", 99)         ->  0     (key exists, so 0 wins over the fallback)

// ----- 11. A counter object with a method (`this`) -----
// Write `makeCounter()` that RETURNS an object with count: 0 and a method inc()
// that adds 1 to its OWN count and RETURNS the new count.
// Hint: { count: 0, inc() { this.count++; return this.count; } }  — `this` is the object.
function makeCounter() {
  return {
    count: 0,
    inc() {
      this.count++;
      return this.count;
    },
  };
}
const b = makeCounter();
console.log(b.count);
const a = makeCounter();
a.inc();
a.count;
console.log(a.inc());
const c = makeCounter();
console.log(c.inc());

// TEST 1:  makeCounter().count        ->  0
// TEST 2:  const a = makeCounter(); a.inc(); a.inc();  a.count   ->  2
// TEST 3:  const b = makeCounter(); b.inc()                       ->  1

// ----- 12. A bank account with deposit/withdraw -----
// Write `makeBank(start)` that RETURNS an object with balance: start and two methods:
// deposit(n) adds n to the balance, withdraw(n) subtracts n; both RETURN the new balance.

function makeBank(start) {
  return {
    balance: start,
    deposit(n) {
      this.balance += n;
      return this.balance;
    },
    withdraw(n) {
      this.balance -= n;
      return this.balance;
    },
  };
}

const acct = makeBank(100);
console.log(acct.deposit(50));
const x = makeBank(100);
x.deposit(50);
x.withdraw(30);
console.log(x.balance);
console.log(makeBank(0).balance);

// TEST 1:  makeBank(100).deposit(50)   ->  150
// TEST 2:  const x = makeBank(100); x.deposit(50); x.withdraw(30); x.balance   ->  120
// TEST 3:  makeBank(0).balance         ->  0

/* ============================================================
   PART D — LOOP OVER AN OBJECT (for...in / Object.keys / values)
   ============================================================ */

// ----- 13. Count the keys -----
// Write `countKeys(obj)` that RETURNS how many keys the object has.
// Hint: loop `for (const k in obj) count++`  OR  Object.keys(obj).length.

function countKeys(obj) {
  return Object.keys(obj).length;
}
console.log(countKeys({ a: 1, b: 2, c: 3 }));
console.log(countKeys({}));
console.log(countKeys({ x: 5 }));

// TEST 1:  countKeys({ a: 1, b: 2, c: 3 })  ->  3
// TEST 2:  countKeys({})                    ->  0
// TEST 3:  countKeys({ x: 5 })              ->  1

// ----- 14. Sum the values -----
// Write `sumValues(obj)` that RETURNS the sum of all (numeric) values.
// Hint: total = 0; for (const k in obj) total += obj[k].

function sumValues(obj) {
  let sum = 0;
  const values = Object.values(obj);
  for (let val of values) {
    if (typeof val === "number") {
      sum += val;
    }
  }

  return sum;
}
console.log(sumValues({ a: 1, b: 2, c: 3 }));
console.log(sumValues({ x: 10 }));
console.log(sumValues({}));

// TEST 1:  sumValues({ a: 1, b: 2, c: 3 })  ->  6
// TEST 2:  sumValues({ x: 10 })             ->  10
// TEST 3:  sumValues({})                    ->  0

// ----- 15. Biggest value -----
// Write `maxValue(obj)` that RETURNS the largest value. Assume at least one key.
// Hint: start `best` from -Infinity, then compare each value.

function maxValue(obj) {
  const values = Object.values(obj);
  return Math.max(...values);
}
console.log(maxValue({ a: 5, b: 9, c: 2 }));
console.log(maxValue({ x: 7 }));
console.log(maxValue({ a: -3, b: -1 }));

// TEST 1:  maxValue({ a: 5, b: 9, c: 2 })     ->  9
// TEST 2:  maxValue({ x: 7 })                 ->  7
// TEST 3:  maxValue({ a: -3, b: -1 })         ->  -1

// ----- 16. Key with the biggest value -----
// Write `keyOfMax(obj)` that RETURNS the KEY whose value is largest (first one if tied).
// Hint: track both bestKey and bestVal as you loop.

function keyOfMax(obj) {
  let maxKey = null;
  let maxValue = -Infinity;
  for (let key in obj) {
    if (obj[key] > maxValue) {
      maxValue = obj[key];
      maxKey = key;
    }
  }

  return maxKey;
}
console.log(keyOfMax({ math: 80, art: 95, gym: 88 }));
console.log(keyOfMax({ a: 5, b: 9, c: 2 }));
console.log(keyOfMax({ only: 1 }));

// TEST 1:  keyOfMax({ math: 80, art: 95, gym: 88 })  ->  "art"
// TEST 2:  keyOfMax({ a: 5, b: 9, c: 2 })            ->  "b"
// TEST 3:  keyOfMax({ only: 1 })                     ->  "only"

// ----- 17. Average of the values -----
// Write `averageValue(obj)` that RETURNS the mean of the values (sum divided by count).
// Hint: total and count together in one loop, then total / count.

function averageValue(obj) {
  const values = Object.values(obj).filter((val) => typeof val === "number");
  if (values.length === 0) return 0;
  const sum = values.reduce((total, val) => total + val, 0);
  return sum / values.length;
}
console.log(averageValue({ a: 2, b: 4, c: 6 }));
console.log(averageValue({ x: 10 }));
console.log(averageValue({ a: 1, b: 2 }));

// TEST 1:  averageValue({ a: 2, b: 4, c: 6 })  ->  4
// TEST 2:  averageValue({ x: 10 })             ->  10
// TEST 3:  averageValue({ a: 1, b: 2 })        ->  1.5

// ----- 18. Double every value (new object) -----
// Write `doubleValues(obj)` that RETURNS a NEW object with the same keys but every
// value times 2. The original must stay untouched.
// Hint: out = {}; for (const k in obj) out[k] = obj[k] * 2.

function doubleValues(obj) {
  const out = {};
  for (const k in obj) {
    out[k] = obj[k] * 2;
  }
  return out;
}
console.log(doubleValues({ a: 1, b: 2 }));
console.log(doubleValues({ x: 0 }));
console.log(doubleValues({}));

// TEST 1:  doubleValues({ a: 1, b: 2 })  ->  { a: 2, b: 4 }
// TEST 2:  doubleValues({ x: 0 })        ->  { x: 0 }
// TEST 3:  doubleValues({})              ->  {}

// ----- 19. Render key=value pairs -----
// Write `toPairs(obj)` that RETURNS "key=value" for each pair, joined by ", ".
// Hint: build a string; add ", " before every pair except the first.

function toPairs(obj) {
  let result = "";
  let isFirst = true;
  for (const k in obj) {
    if (!isFirst) {
      result += ", ";
    }
    result += k + "=" + obj[k];
    isFirst = false;
  }
  return result;
}
console.log(toPairs({ a: 1, b: 2 }));

// TEST 1:  toPairs({ a: 1, b: 2 })  ->  "a=1, b=2"
// TEST 2:  toPairs({ x: 5 })        ->  "x=5"
// TEST 3:  toPairs({})              ->  ""

/* ============================================================
   PART E — OBJECT AS A MAP / COUNTER
   The object stops being a fixed record and becomes a lookup
   table you build as you go — the classic "frequency counter".
   ============================================================ */

// ----- 20. Letter count -----
// Write `letterCount(word)` that RETURNS an object mapping each letter to how many
// times it appears. Hint: counts = {}; for each char, if missing start at 0, then +1.
//   if (counts[ch] === undefined) counts[ch] = 0;  counts[ch]++;
function letterCount(word) {
  const counts = {};

  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    if (counts[ch] === undefined) {
      counts[ch] = 0;
    }
    counts[ch]++;
  }

  return counts;
}
console.log(letterCount("hello"));
// TEST 1:  letterCount("hello")  ->  { h: 1, e: 1, l: 2, o: 1 }
// TEST 2:  letterCount("aaa")    ->  { a: 3 }
// TEST 3:  letterCount("")       ->  {}     (empty word, empty object)

// ----- 21. Length of each word -----
// Write `wordLengths(sentence)` that RETURNS an object mapping each word to its length.
// Hint: sentence.split(" ") gives the words; loop them, set obj[word] = word.length.

function wordLengths(sentence) {
  const lengths = {};
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word === "") continue;
    lengths[word] = word.length;
  }
  return lengths;
}
console.log(wordLengths("the cat sat"));

// TEST 1:  wordLengths("the cat sat")  ->  { the: 3, cat: 3, sat: 3 }
// TEST 2:  wordLengths("hi there")     ->  { hi: 2, there: 5 }
// TEST 3:  wordLengths("one")          ->  { one: 3 }

// ----- 22. Flip keys and values -----
// Write `invert(obj)` that RETURNS a new object where each value becomes a key and
// each key becomes its value. Assume values are unique strings/numbers.
// Hint: out = {}; for (const k in obj) out[obj[k]] = k.

function invert(obj) {
  const out = {};

  for (const k in obj) {
    const value = obj[k];

    out[value] = k;
  }
  return out;
}
console.log(invert({ a: "x", b: "y" }));

// TEST 1:  invert({ a: "x", b: "y" })   ->  { x: "a", y: "b" }
// TEST 2:  invert({ one: 1 })           ->  { "1": "one" }   (number value becomes a key)
// TEST 3:  invert({})                   ->  {}

/* ============================================================
   PART F — COPY (new object, original untouched)
   ============================================================ */

// ----- 23. Shallow copy -----
// Write `copyObject(obj)` that RETURNS a NEW object with the same keys and values.
// Changing the copy must NOT change the original. Hint: { ...obj }.

function copyObject(obj) {
  return { ...obj };
}
console.log(copyObject({ a: 1, b: 2 }));

// TEST 1:  copyObject({ a: 1, b: 2 }).a   ->  1
// TEST 2:  const o = { a: 1 }; copyObject(o) === o   ->  false   (a NEW object, not the same one)
// TEST 3:  copyObject({})                 ->  {}

// ----- 24. Omit a key WITHOUT mutating (reuse copyObject) -----
// Write `omitField(obj, key)` that RETURNS a NEW object with that key removed, leaving
// the original untouched. (Contrast removeField in ex 6, which mutates.)
// Hint: copyObject first, then delete the key from the copy.

function omitField(obj, key) {
  const copy = { ...obj };
  delete copy[key];
  return copy;
}
console.log(omitField({ a: 1, b: 2 }, "a"));

// TEST 1:  omitField({ a: 1, b: 2 }, "a")                  ->  { b: 2 }
// TEST 2:  const o = { a: 1, b: 2 }; omitField(o, "a"); "a" in o   ->  true   (original kept)
// TEST 3:  omitField({ a: 1 }, "a")                        ->  {}

/* ============================================================
   PART G — CHALLENGE BLOCK (25–30)  (the object is your tool)
   Same hash-map trick the real LeetCode problems lean on: count
   things in an object, then read the counts back. The last two
   COMPOSE earlier functions over nested data — the real test.
   ============================================================ */

// ----- 25. First Unique Character  (LeetCode 387 lite) -----
// Write `firstUniqueChar(word)` -> the FIRST character that appears exactly once.
// If none, RETURN "". Hint: count every char into an object, then walk the word again
// and return the first char whose count is 1.

function firstUniqueChar(word) {
  const charCounts = {};
  for (const char of word) {
    if (charCounts[char]) {
      charCounts[char] += 1;
    } else {
      charCounts[char] = 1;
    }
  }
  for (const char of word) {
    if (charCounts[char] === 1) {
      return char;
    }
  }
  return "";
}
console.log(firstUniqueChar("leetcode"));
// EXAMPLE 1:  firstUniqueChar("leetcode")  ->  "l"
// EXAMPLE 2:  firstUniqueChar("swiss")     ->  "w"
// EXAMPLE 3:  firstUniqueChar("aabb")      ->  ""    (every char repeats)

// ----- 26. Valid Anagram  (LeetCode 242) -----
// Write `areAnagrams(a, b)` -> true if b is a rearrangement of a (same letters, same
// counts). Hint: if lengths differ -> false; count a into an object; walk b subtracting;
// any count going negative or a missing key -> false.

function areAnagrams(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  const charCounts = {};
  for (const char of a) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
  for (const char of b) {
    if (!charCounts[char]) {
      return false;
    }
    charCounts[char] -= 1;
  }
  return true;
}
console.log(areAnagrams("listen", "silent"));

// EXAMPLE 1:  areAnagrams("listen", "silent")  ->  true
// EXAMPLE 2:  areAnagrams("hello", "world")    ->  false
// EXAMPLE 3:  areAnagrams("a", "aa")           ->  false   (different lengths)

// ----- 27. Can Form a Palindrome  (LeetCode 266 lite) -----
// Write `canFormPalindrome(word)` -> true if the letters can be rearranged into a
// palindrome. Rule: at most ONE letter may have an odd count. Hint: build counts,
// then count how many counts are odd; ok if that total is 0 or 1.

function canFormPalindrome(word) {
  const charCounts = {};
  for (const char of word) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
  let oddCount = 0;
  for (const key in charCounts) {
    if (charCounts[key] % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount <= 1;
}
console.log(canFormPalindrome("aabb"));

// EXAMPLE 1:  canFormPalindrome("aabb")     ->  true    (aabb -> "abba")
// EXAMPLE 2:  canFormPalindrome("abc")      ->  false   (three odd counts)
// EXAMPLE 3:  canFormPalindrome("racecar")  ->  true    (only e is odd)

// ----- 28. Merge Keeping the Max -----
// Write `mergeMax(a, b)` -> a NEW object with every key from both; when a key is in
// BOTH, keep the LARGER value. Hint: copy a, then for each key in b use Math.max if the
// key already exists, else just take b's value.

function mergeMax(a, b) {
  const out = { ...a };
  for (const k in b) {
    if (k in out) {
      out[k] = Math.max(out[k], b[k]);
    } else {
      out[k] = b[k];
    }
  }
  return out;
}
console.log(mergeMax({ a: 1, b: 5 }, { a: 3, b: 2, c: 9 }));

// EXAMPLE 1:  mergeMax({ a: 1, b: 5 }, { a: 3, b: 2, c: 9 })  ->  { a: 3, b: 5, c: 9 }
// EXAMPLE 2:  mergeMax({}, { x: 1 })                          ->  { x: 1 }
// EXAMPLE 3:  mergeMax({ k: 4 }, { k: 2 })                    ->  { k: 4 }

/* ------------------------------------------------------------
   NESTED MINI-PROJECT (29–30): one BIG object, three levels deep.
   THE RULE FOR DEEP DATA: build BOTTOM-UP. Write the small brick
   first (studentAverage), then the next function CALLS it
   (classAverage). Each layer trusts the layer below.

   SCHOOL is real data below (NOT commented) so the tests run.
   Do NOT edit it — your functions must work on it as-is.
   ------------------------------------------------------------ */

const SCHOOL = {
  name: "Lagos High",
  passMark: 70,
  classes: {
    jss1: {
      teacher: "Mr. Ade",
      students: {
        ana: { math: 90, english: 80, science: 70 }, // average 80
        ben: { math: 60, english: 50, science: 40 }, // average 50
      },
    },
    jss2: {
      teacher: "Ms. Bola",
      students: {
        cleo: { math: 100, english: 90, science: 80 }, // average 90
        dare: { math: 60, english: 60, science: 60 }, // average 60
      },
    },
  },
};

// ----- 29. One student's average (the bottom brick) -----
// Write `studentAverage(scores)` where scores is a plain { subject: number } object.
// RETURN the mean of the values. Everything in the next exercise calls this.
// Hint: total + count in one for...in loop, then total / count (like ex 17).

function studentAverage(scores) {
  let total = 0;
  let count = 0;
  for (const subject in scores) {
    total += scores[subject];
    count++;
  }
  if (count === 0) return 0;
  return total / count;
}
console.log(studentAverage({ math: 90, english: 80, science: 70 }));

// TEST 1:  studentAverage({ math: 90, english: 80, science: 70 })  ->  80
// TEST 2:  studentAverage({ math: 60, english: 60, science: 60 })  ->  60
// TEST 3:  studentAverage({ a: 1, b: 2 })                          ->  1.5

// ----- 30. A class average (CALL studentAverage) -----
// Write `classAverage(school, classId)` that RETURNS the mean of the students' averages
// in that class. Loop the students with for...in, CALL studentAverage on each one's
// scores, total them, divide by the count. This is the COMPOSE finale.

function classAverage(school, classId) {
  const targetClass = school.classes[classId];
  if (!targetClass) return 0;
  const students = targetClass.students;
  let totalClassAverage = 0;
  let studentCount = 0;
  for (const studentName in students) {
    const studentScores = students[studentName];
    const avg = studentAverage(studentScores);
    totalClassAverage += avg;
    studentCount++;
  }
  if (studentCount === 0) return 0;
  return totalClassAverage / studentCount;
}
console.log(classAverage(SCHOOL, "jss1"));
// TEST 1:  classAverage(SCHOOL, "jss1")  ->  65    (80 + 50, / 2)
// TEST 2:  classAverage(SCHOOL, "jss2")  ->  75    (90 + 60, / 2)
// TEST 3:  classAverage({ classes: { x: { students: { p: { a: 10 }, q: { a: 20 } } } } }, "x")  ->  15

/* ============================================================
   All 3 tests match for an exercise = you got it right.
   Any mismatch = a bug to hunt. Happy object-ing!
   ============================================================ */
