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
console.log(addField({ a:1 }, "a", 9).a);

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
console.log(getCity({ name: "Sam", address: { city: "Lagos", zip: "100001" } }));
console.log(getCity({ address: { city: "Paris" } })) 
console.log(getCity({ address: { city: "", zip: "0" } })) 

// TEST 1:  getCity({ name: "Sam", address: { city: "Lagos" } })  ->  "Lagos"
// TEST 2:  getCity({ address: { city: "Paris" } })               ->  "Paris"
// TEST 3:  getCity({ address: { city: "", zip: "0" } })          ->  ""

// ----- 10. Value or fallback -----
// Write `valueOr(obj, key, fallback)` that RETURNS obj[key] if the key EXISTS, else fallback.
// Hint: if (key in obj) return obj[key]; else return fallback.

function valueOr(obj, key, fallback){
  if (key in obj) return obj[key];
  else return fallback
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
        }
    };
}
const b = makeCounter(); console.log(b.count);
const a = makeCounter(); a.inc(); a.count; console.log(a.inc());
const c = makeCounter(); console.log(c.inc());

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
        }
    };
}

const acct = makeBank(100); console.log(acct.deposit(50));
const x = makeBank(100); x.deposit(50); x.withdraw(30); console.log(x.balance); 
console.log(makeBank(0).balance)

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
console.log(countKeys({ x: 5}));

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
        if (typeof val === 'number') {
            sum += val;
        }
    }
    
    return sum;
}
console.log(sumValues({ a: 1, b: 2, c: 3 }));
console.log(sumValues({ x: 10 }));
console.log(sumValues({ }));

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
console.log(maxValue({ x: 7}));
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
console.log(keyOfMax({ a: 5, b: 9, c: 2}));
console.log(keyOfMax({ only: 1 }));

// TEST 1:  keyOfMax({ math: 80, art: 95, gym: 88 })  ->  "art"
// TEST 2:  keyOfMax({ a: 5, b: 9, c: 2 })            ->  "b"
// TEST 3:  keyOfMax({ only: 1 })                     ->  "only"

// ----- 17. Average of the values -----
// Write `averageValue(obj)` that RETURNS the mean of the values (sum divided by count).
// Hint: total and count together in one loop, then total / count.

function averageValue(obj) {
    const values = Object.values(obj).filter(val => typeof val === 'number');
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
console.log(doubleValues({ }));

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


/* ============================================================
   ARRAYS 1 — BUILD THE 8   (3 cases each — all must pass)
   ============================================================ */

// ----- 1. Get one item (WORKED EXAMPLE) -----
// Write `secondItem(arr)` that RETURNS the item at index 1.
function secondItem(arr) {
  return arr[1];
}
console.log(secondItem(["a", "b", "c"]));
// TEST 1:  secondItem(["a","b","c"])   ->  "b"
// TEST 2:  secondItem([10, 20, 30])    ->  20
// TEST 3:  secondItem(["x", "y"])      ->  "y"

// ----- 2. How many items -----
// Write `howMany(arr)` that RETURNS the number of items.
function howMany(arr) {
  return arr.length;
}

// console.log(howMany([1, 2, 3, 4]));
// TEST 1:  howMany([1,2,3,4])   ->  4
// TEST 2:  howMany([])          ->  0
// TEST 3:  howMany(["only"])    ->  1

// ----- 3. Last item -----
// Write `lastItem(arr)` that RETURNS the last item (any length).
// Hint: arr[arr.length - 1]
function lastItem(arr) {
  return arr[arr.length - 1];
}

// console.log(lastItem(["x", "y", "z"]));
// TEST 1:  lastItem(["x","y","z"])   ->  "z"
// TEST 2:  lastItem([5])             ->  5
// TEST 3:  lastItem([1, 2, 3, 4])    ->  4

// ----- 4. Add to the end -----
// Write `addItem(arr, item)` that pushes item onto arr and RETURNS arr.
function addItem(arr, item) {
  arr.push(item);
  return arr;
}

// console.log(addItem([1, 2], 3));
// TEST 1:  addItem([1,2], 3)         ->  [1,2,3]
// TEST 2:  addItem([], "hi").length  ->  1
// TEST 3:  addItem(["a"], "b")       ->  ["a","b"]

// ----- 5. Remove the last -----
// Write `removeLast(arr)` that pops the last item off and RETURNS arr.
function removeLast(arr) {
  arr.pop();
  return arr;
}

// console.log(removeLast([1, 2, 3]));
// TEST 1:  removeLast([1,2,3])         ->  [1,2]
// TEST 2:  removeLast([9]).length      ->  0
// TEST 3:  removeLast([5,6,7,8])       ->  [5,6,7]

// ----- 6. Add to the front -----
// Write `addFront(arr, item)` that unshifts item to the front and RETURNS arr.
function addFront(arr, item) {
  arr.unshift(item);
  return arr;
}

// console.log(addFront([2, 3], 1));
// TEST 1:  addFront([2,3], 1)   ->  [1,2,3]
// TEST 2:  addFront([], "a")    ->  ["a"]
// TEST 3:  addFront(["b"], "a") ->  ["a","b"]

// ----- 7. Is it in there? -----
// Write `hasItem(arr, item)` that RETURNS true/false if item is in arr.
// Hint: arr.includes(item)
function hasItem(arr, item) {
  return arr.includes(item);
}

// console.log(hasItem(["cat", "dog"], "dog"));
// TEST 1:  hasItem(["cat","dog"], "dog")   ->  true
// TEST 2:  hasItem(["cat","dog"], "fish")  ->  false
// TEST 3:  hasItem([], "cat")              ->  false

// ----- 8. Where is it? -----
// Write `positionOf(arr, item)` that RETURNS the index, or -1 if missing.
// Hint: arr.indexOf(item)
function positionOf(arr, item) {
  return arr.indexOf(item);
}

// console.log(positionOf(["a", "b", "c"], "c"));
// TEST 1:  positionOf(["a","b","c"], "c")   ->  2
// TEST 2:  positionOf(["a","b","c"], "z")   ->  -1
// TEST 3:  positionOf(["a","b","c"], "a")   ->  0
/* ============================================================
   ARRAYS 2 — METHODS: THE CHEAT SHEET (teach this first)
   ------------------------------------------------------------
   These REPLACE writing a loop by hand. Each method takes a
   FUNCTION and runs it on every item for you.
   Run:  node 2-methods.js
   ============================================================ */

const nums = [1, 2, 3, 4, 5, 6];

// map — TRANSFORM every item -> NEW array, same length
// console.log(nums.map((n) => n * 2));          // [2,4,6,8,10,12]

// filter — KEEP items that pass the test -> NEW array, shorter
// console.log(nums.filter((n) => n % 2 === 0)); // [2,4,6]

// find — FIRST item that passes (one item, not an array)
// console.log(nums.find((n) => n > 3));         // 4
// console.log(nums.find((n) => n > 99));        // undefined

// reduce — BOIL the whole array down to ONE value (sum, max...)
// acc = running result, n = current item, 0 = starting value
// console.log(nums.reduce((acc, n) => acc + n, 0));  // 21

// some / every — return true/false
// console.log(nums.some((n) => n > 5));         // true  (at least one)
// console.log(nums.every((n) => n > 0));        // true  (all of them)

// sort — order the array. For NUMBERS you MUST give (a,b)=>a-b
// console.log([3, 1, 2].sort((a, b) => a - b)); // [1,2,3]
// console.log([3, 1, 2].sort((a, b) => b - a)); // [3,2,1]

// CHAIN — filter then map, left to right
// console.log(nums.filter((n) => n % 2 === 0).map((n) => n * 10)); // [20,40,60]


/* ============================================================
   ARRAYS 2 — BUILD THE 8   (3 cases each — all must pass)
   ============================================================ */

// ----- 1. map (WORKED EXAMPLE) -----
// Write `withTax(prices)` that RETURNS a NEW array with each price * 1.1.
function withTax(prices) {
  return prices.map((p) => p * 1.1);
}
console.log(withTax([10, 20]));

// TEST 1:  withTax([10,20])   ->  [11, 22]
// TEST 2:  withTax([])        ->  []
// TEST 3:  withTax([100])     ->  [110]

// ----- 2. filter -----
// Write `cheap(prices)` that RETURNS a NEW array of prices under 20.
function cheap(prices) {
  return prices.filter((p) => p < 20);
}
console.log(cheap([10, 25, 5, 40, 15]));

// TEST 1:  cheap([10,25,5,40,15])   ->  [10,5,15]
// TEST 2:  cheap([100,200])         ->  []
// TEST 3:  cheap([19,20,21])        ->  [19]

// ----- 3. find -----
// Write `firstExpensive(prices)` that RETURNS the first price over 30.
function firstExpensive(prices) {
  return prices.find((p) => p > 30);
}

// console.log(firstExpensive([10, 25, 5, 40, 15]));
// TEST 1:  firstExpensive([10,25,5,40,15])   ->  40
// TEST 2:  firstExpensive([1,2,3])           ->  undefined
// TEST 3:  firstExpensive([50,99])           ->  50

// ----- 4. reduce (sum) -----
// Write `total(prices)` that RETURNS the sum using reduce.
function total(prices) {
  return prices.reduce((acc, p) => acc + p, 0);
}

// console.log(total([10, 25, 5, 40, 15]));
// TEST 1:  total([10,25,5,40,15])   ->  95
// TEST 2:  total([])                ->  0
// TEST 3:  total([7])               ->  7

// ----- 5. some / every -----
// Write `anyFree(prices)` -> true if ANY price is 0.
// Write `allPositive(prices)` -> true if EVERY price is > 0.
function anyFree(prices) {
  return prices.some((p) => p === 0);
}
function allPositive(prices) {
  return prices.every((p) => p > 0);
}

// console.log(anyFree([10, 0, 5]), allPositive([10, 0, 5]));
// TEST 1:  anyFree([10,0,5])       ->  true
// TEST 2:  allPositive([10,0,5])   ->  false
// TEST 3:  allPositive([10,5])     ->  true

// ----- 6. sort -----
// Write `lowToHigh(prices)` that RETURNS the prices sorted ascending.
// Hint: numbers need .sort((a,b) => a - b)
function lowToHigh(prices) {
  return prices.sort((a, b) => a - b);
}

// console.log(lowToHigh([10, 25, 5, 40, 15]));
// TEST 1:  lowToHigh([10,25,5,40,15])   ->  [5,10,15,25,40]
// TEST 2:  lowToHigh([3,1,2])           ->  [1,2,3]
// TEST 3:  lowToHigh([2])               ->  [2]

// ----- 7. chain: filter then map -----
// Write `cheapDoubled(prices)` -> keep prices under 20, then double each.
function cheapDoubled(prices) {
  return prices.filter((p) => p < 20).map((p) => p * 2);
}

// console.log(cheapDoubled([10, 25, 5, 40, 15]));
// TEST 1:  cheapDoubled([10,25,5,40,15])   ->  [20,10,30]
// TEST 2:  cheapDoubled([100])             ->  []
// TEST 3:  cheapDoubled([5,5])             ->  [10,10]

// ----- 8. methods on objects -----
// Write `inStockNames(items)` -> array of the .name of every item where .stock > 0.
// (filter by stock, then map to name — arrays + objects + methods together)
const inventory = [
  { name: "pen", stock: 5 },
  { name: "book", stock: 0 },
  { name: "bag", stock: 3 },
  { name: "cup", stock: 0 },
];
function inStockNames(items) {
  return items.filter((item) => item.stock > 0).map((item) => item.name);
}

// console.log(inStockNames(inventory));
// TEST 1:  inStockNames(inventory)                        ->  ["pen","bag"]
// TEST 2:  inStockNames([])                               ->  []
// TEST 3:  inStockNames([{name:"x",stock:1}])             ->  ["x"]

/* ============================================================
   ARRAYS 3 — MOVIES DATABASE (boss level)
   ------------------------------------------------------------
   One big list of movie objects. Combine EVERYTHING: objects,
   conditions, and the array methods. Read the data shape first.
   Run:  node 3-database-movies.js
   ============================================================ */

// 16 movies. Fields:
//   title (string), year (number), genre (string),
//   rating (0-10), minutes (number), oscars (number)
const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "drama",
    rating: 9.3,
    minutes: 142,
    oscars: 0,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "action",
    rating: 9.0,
    minutes: 152,
    oscars: 2,
  },
  {
    title: "Inception",
    year: 2010,
    genre: "action",
    rating: 8.8,
    minutes: 148,
    oscars: 4,
  },
  {
    title: "Parasite",
    year: 2019,
    genre: "drama",
    rating: 8.5,
    minutes: 132,
    oscars: 4,
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "scifi",
    rating: 8.7,
    minutes: 169,
    oscars: 1,
  },
  {
    title: "The Matrix",
    year: 1999,
    genre: "scifi",
    rating: 8.7,
    minutes: 136,
    oscars: 4,
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    genre: "crime",
    rating: 8.9,
    minutes: 154,
    oscars: 1,
  },
  {
    title: "Forrest Gump",
    year: 1994,
    genre: "drama",
    rating: 8.8,
    minutes: 142,
    oscars: 6,
  },
  {
    title: "Gladiator",
    year: 2000,
    genre: "action",
    rating: 8.5,
    minutes: 155,
    oscars: 5,
  },
  {
    title: "Spirited Away",
    year: 2001,
    genre: "anime",
    rating: 8.6,
    minutes: 125,
    oscars: 1,
  },
  {
    title: "Whiplash",
    year: 2014,
    genre: "drama",
    rating: 8.5,
    minutes: 106,
    oscars: 3,
  },
  {
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: "action",
    rating: 8.1,
    minutes: 120,
    oscars: 6,
  },
  {
    title: "Joker",
    year: 2019,
    genre: "crime",
    rating: 8.4,
    minutes: 122,
    oscars: 2,
  },
  {
    title: "Dune",
    year: 2021,
    genre: "scifi",
    rating: 8.0,
    minutes: 155,
    oscars: 6,
  },
  {
    title: "Oppenheimer",
    year: 2023,
    genre: "drama",
    rating: 8.3,
    minutes: 180,
    oscars: 7,
  },
  {
    title: "Your Name",
    year: 2016,
    genre: "anime",
    rating: 8.4,
    minutes: 106,
    oscars: 0,
  },
];

/* ============================================================
   BUILD THE 10   (3 cases each — all must pass)
   ============================================================ */

// ----- 1. Count them (WORKED EXAMPLE) -----
function countMovies(db) {
  return db.length;
}
console.log(countMovies(movies)); // 16
// TEST 1:  countMovies(movies)   ->  16
// TEST 2:  countMovies([])       ->  0
// TEST 3:  countMovies([movies[0]]) -> 1

// ----- 2. filter by genre -----
// Write `byGenre(db, genre)` -> array of movies in that genre.
function byGenre(db, genre) {
  return db.filter((m) => m.genre === genre);
}

// console.log(byGenre(movies, "scifi").length);
// TEST 1:  byGenre(movies,"scifi").length   ->  3
// TEST 2:  byGenre(movies,"anime").length   ->  2
// TEST 3:  byGenre(movies,"horror").length  ->  0

// ----- 3. filter + condition -----
// Write `topRated(db)` -> movies with rating >= 8.7.
function topRated(db) {
  return db.filter((m) => m.rating >= 8.7);
}

// console.log(topRated(movies).length);
// TEST 1:  topRated(movies).length                          ->  7
// TEST 2:  topRated(movies).every(m => m.rating >= 8.7)     ->  true
// TEST 3:  topRated([{rating:5}]).length                    ->  0

// ----- 4. map — just the titles -----
// Write `allTitles(db)` -> array of every title (strings only).
function allTitles(db) {
  return db.map((m) => m.title);
}

// console.log(allTitles(movies)[0]);
// TEST 1:  allTitles(movies)[0]        ->  "The Shawshank Redemption"
// TEST 2:  allTitles(movies).length    ->  16
// TEST 3:  allTitles(movies)[15]        ->  "Your Name"

// ----- 5. find by title -----
// Write `findByTitle(db, title)` -> the one movie object, or undefined.
function findByTitle(db, title) {
  return db.find((m) => m.title === title);
}

// console.log(findByTitle(movies, "Joker").year);
// TEST 1:  findByTitle(movies,"Joker").year     ->  2019
// TEST 2:  findByTitle(movies,"Dune").oscars    ->  6
// TEST 3:  findByTitle(movies,"Not Real")       ->  undefined

// ----- 6. reduce — total oscars -----
// Write `totalOscars(db)` -> sum of every movie's .oscars.
function totalOscars(db) {
  return db.reduce((acc, m) => acc + m.oscars, 0);
}

// console.log(totalOscars(movies));
// TEST 1:  totalOscars(movies)            ->  52
// TEST 2:  totalOscars([])                ->  0
// TEST 3:  totalOscars([{oscars:3}])      ->  3

// ----- 7. average rating -----
// Write `averageRating(db)` -> mean rating, rounded to 1 decimal.
// Hint: total / length, then Number(x.toFixed(1)).
function averageRating(db) {
  if (db.length === 0) return 0;
  const total = db.reduce((acc, m) => acc + m.rating, 0);
  return Number((total / db.length).toFixed(1));
}

// console.log(averageRating(movies));
// TEST 1:  averageRating(movies)                    ->  8.6
// TEST 2:  averageRating([{rating:8},{rating:9}])   ->  8.5
// TEST 3:  averageRating([{rating:7}])              ->  7

// ----- 8. sort — best first -----
// Write `bestFirst(db)` -> NEW array sorted by rating, highest first.
// Hint: [...db].sort((a,b) => b.rating - a.rating)  (copy first!)
function bestFirst(db) {
  return [...db].sort((a, b) => b.rating - a.rating);
}

// console.log(bestFirst(movies)[0].title);
// TEST 1:  bestFirst(movies)[0].title    ->  "The Shawshank Redemption"
// TEST 2:  bestFirst(movies)[0].rating   ->  9.3
// TEST 3:  bestFirst(movies).length      ->  16

// ----- 9. chain — filter + sort + map -----
// Write `bestActionTitles(db)` -> action movies, sorted best-first, titles only.
function bestActionTitles(db) {
  return db
    .filter((m) => m.genre === "action")
    .sort((a, b) => b.rating - a.rating)
    .map((m) => m.title);
}

// console.log(bestActionTitles(movies));
// TEST 1:  bestActionTitles(movies)[0]       ->  "The Dark Knight"
// TEST 2:  bestActionTitles(movies).length   ->  4
// TEST 3:  bestActionTitles(movies)[3]       ->  "Mad Max: Fury Road"

// ----- 10. GROUP — array of objects -> object of counts (the hard one) -----
// Write `countByGenre(db)` -> object mapping each genre to how many movies.
// Hint: result = {}; loop; result[m.genre] = (result[m.genre] || 0) + 1.
function countByGenre(db) {
  return db.reduce((acc, m) => {
    acc[m.genre] = (acc[m.genre] || 0) + 1;
    return acc;
  }, {});
}

// console.log(countByGenre(movies));
// TEST 1:  countByGenre(movies).drama    ->  5
// TEST 2:  countByGenre(movies).action   ->  4
// TEST 3:  countByGenre(movies).anime    ->  2

/* ============================================================
   ARRAYS 4 — EMPLOYEES DATABASE (boss level)
   ------------------------------------------------------------
   HR data. Same tools as the movies file. New twist at the end:
   group AND total a field per group (payroll by department).
   Run:  node 4-database-employees.js
   ============================================================ */

// 15 employees. Fields:
//   name (string), dept (string), salary (number),
//   age (number), years (number at company), remote (boolean)
const employees = [
  { name: "Sara", dept: "engineering", salary: 95000,  age: 29, years: 4,  remote: true  },
  { name: "Ali",  dept: "engineering", salary: 110000, age: 35, years: 7,  remote: false },
  { name: "Omar", dept: "sales",       salary: 60000,  age: 41, years: 10, remote: false },
  { name: "Lina", dept: "sales",       salary: 72000,  age: 38, years: 6,  remote: true  },
  { name: "Maya", dept: "marketing",   salary: 68000,  age: 27, years: 2,  remote: true  },
  { name: "Jon",  dept: "engineering", salary: 130000, age: 45, years: 12, remote: false },
  { name: "Eva",  dept: "design",      salary: 80000,  age: 31, years: 5,  remote: true  },
  { name: "Tom",  dept: "design",      salary: 75000,  age: 28, years: 3,  remote: false },
  { name: "Nia",  dept: "marketing",   salary: 90000,  age: 33, years: 6,  remote: false },
  { name: "Sam",  dept: "sales",       salary: 55000,  age: 24, years: 1,  remote: true  },
  { name: "Kim",  dept: "engineering", salary: 105000, age: 39, years: 8,  remote: true  },
  { name: "Leo",  dept: "support",     salary: 50000,  age: 26, years: 2,  remote: false },
  { name: "Ada",  dept: "support",     salary: 58000,  age: 30, years: 4,  remote: true  },
  { name: "Max",  dept: "design",      salary: 88000,  age: 36, years: 9,  remote: false },
  { name: "Zoe",  dept: "marketing",   salary: 72000,  age: 25, years: 1,  remote: true  },
];

/* ============================================================
   BUILD THE 11   (3 cases each — all must pass)
   ============================================================ */

// ----- 1. Count them (WORKED EXAMPLE) -----
function countEmployees(db) {
  return db.length;
}
console.log(countEmployees(employees)); // 15
// TEST 1:  countEmployees(employees)   ->  15
// TEST 2:  countEmployees([])          ->  0
// TEST 3:  countEmployees([employees[0]]) -> 1

// ----- 2. filter by department -----
// Write `byDept(db, dept)` -> array of employees in that department.
function byDept(db, dept) {
  return db.filter((e) => e.dept === dept);
}

// console.log(byDept(employees, "engineering").length);
// TEST 1:  byDept(employees,"engineering").length   ->  4
// TEST 2:  byDept(employees,"support").length       ->  2
// TEST 3:  byDept(employees,"legal").length         ->  0

// ----- 3. filter + condition — high earners -----
// Write `highEarners(db)` -> employees with salary > 90000.
function highEarners(db) {
  return db.filter((e) => e.salary > 90000);
}

// console.log(highEarners(employees).length);
// TEST 1:  highEarners(employees).length                                ->  4
// TEST 2:  highEarners(employees).map(e => e.name).includes("Jon")  ->  true
// TEST 3:  highEarners(employees).map(e => e.name).includes("Omar") ->  false

// ----- 4. map — just the names -----
// Write `allNames(db)` -> array of every employee name.
function allNames(db) {
  return db.map((e) => e.name);
}

// console.log(allNames(employees)[0]);
// TEST 1:  allNames(employees)[0]       ->  "Sara"
// TEST 2:  allNames(employees).length   ->  15
// TEST 3:  allNames(employees)[14]      ->  "Zoe"

// ----- 5. find by name -----
// Write `findEmployee(db, name)` -> the one object, or undefined.
function findEmployee(db, name) {
  return db.find((e) => e.name === name);
}

// console.log(findEmployee(employees, "Eva").dept);
// TEST 1:  findEmployee(employees,"Eva").dept     ->  "design"
// TEST 2:  findEmployee(employees,"Eva").salary   ->  80000
// TEST 3:  findEmployee(employees,"Ghost")        ->  undefined

// ----- 6. reduce — total payroll -----
// Write `totalPayroll(db)` -> sum of every salary.
function totalPayroll(db) {
  return db.reduce((acc, e) => acc + e.salary, 0);
}

// console.log(totalPayroll(employees));
// TEST 1:  totalPayroll(employees)         ->  1208000
// TEST 2:  totalPayroll([])                ->  0
// TEST 3:  totalPayroll([{salary:100}])    ->  100

// ----- 7. average salary -----
// Write `averageSalary(db)` -> mean salary, rounded with Math.round.
function averageSalary(db) {
  if (db.length === 0) return 0;
  const total = db.reduce((acc, e) => acc + e.salary, 0);
  return Math.round(total / db.length);
}

// console.log(averageSalary(employees));
// TEST 1:  averageSalary(employees)                       ->  80533
// TEST 2:  averageSalary([{salary:100},{salary:200}])     ->  150
// TEST 3:  averageSalary([{salary:50}])                   ->  50

// ----- 8. filter boolean — remote workers -----
// Write `remoteWorkers(db)` -> employees where remote is true.
function remoteWorkers(db) {
  return db.filter((e) => e.remote === true);
}

// console.log(remoteWorkers(employees).length);
// TEST 1:  remoteWorkers(employees).length                                ->  8
// TEST 2:  remoteWorkers(employees).map(e => e.name).includes("Sara") ->  true
// TEST 3:  remoteWorkers(employees).map(e => e.name).includes("Ali")  ->  false

// ----- 9. sort — highest paid first -----
// Write `topPaid(db)` -> NEW array sorted by salary, highest first.
// Hint: [...db].sort((a,b) => b.salary - a.salary)
function topPaid(db) {
  return [...db].sort((a, b) => b.salary - a.salary);
}

// console.log(topPaid(employees)[0].name);
// TEST 1:  topPaid(employees)[0].name      ->  "Jon"
// TEST 2:  topPaid(employees)[0].salary    ->  130000
// TEST 3:  topPaid(employees)[14].name     ->  "Leo"

// ----- 10. chain — filter + sort + map -----
// Write `engineerNamesByPay(db)` -> engineers, sorted highest-paid first, names only.
function engineerNamesByPay(db) {
  return db
    .filter((e) => e.dept === "engineering")
    .sort((a, b) => b.salary - a.salary)
    .map((e) => e.name);
}

// console.log(engineerNamesByPay(employees));
// TEST 1:  engineerNamesByPay(employees)[0]       ->  "Jon"
// TEST 2:  engineerNamesByPay(employees).length   ->  4
// TEST 3:  engineerNamesByPay(employees)[3]       ->  "Sara"

// ----- 11. GROUP + TOTAL — object of sums (the hard one) -----
// Write `payrollByDept(db)` -> object mapping each dept to its TOTAL salary.
// Hint: result = {}; loop; result[e.dept] = (result[e.dept] || 0) + e.salary.
function payrollByDept(db) {
  return db.reduce((acc, e) => {
    acc[e.dept] = (acc[e.dept] || 0) + e.salary;
    return acc;
  }, {});
}

// console.log(payrollByDept(employees));
// TEST 1:  payrollByDept(employees).engineering   ->  440000
// TEST 2:  payrollByDept(employees).support       ->  108000
// TEST 3:  payrollByDept(employees).sales         ->  187000

/* ============================================================
   ARRAYS 5 — PRODUCTS DATABASE (boss level)
   ------------------------------------------------------------
   Online store data. Same tools again. Final twist: reduce two
   fields together (price * stock = inventory value).
   Run:  node 5-database-products.js
   ============================================================ */

// 15 products. Fields:
//   name (string), category (string), price (number),
//   stock (number), rating (0-5), onSale (boolean)
const products = [
  { name: "Laptop",     category: "electronics", price: 1200, stock: 5,   rating: 4.5, onSale: false },
  { name: "Phone",      category: "electronics", price: 800,  stock: 12,  rating: 4.7, onSale: true  },
  { name: "Headphones", category: "electronics", price: 150,  stock: 30,  rating: 4.3, onSale: true  },
  { name: "Desk",       category: "furniture",   price: 300,  stock: 8,   rating: 4.1, onSale: false },
  { name: "Chair",      category: "furniture",   price: 120,  stock: 20,  rating: 4.4, onSale: true  },
  { name: "Lamp",       category: "furniture",   price: 45,   stock: 50,  rating: 4.0, onSale: false },
  { name: "Notebook",   category: "stationery",  price: 5,    stock: 200, rating: 4.6, onSale: false },
  { name: "Pen",        category: "stationery",  price: 2,    stock: 500, rating: 4.2, onSale: true  },
  { name: "Backpack",   category: "accessories", price: 60,   stock: 40,  rating: 4.5, onSale: true  },
  { name: "Watch",      category: "accessories", price: 250,  stock: 15,  rating: 4.8, onSale: false },
  { name: "Monitor",    category: "electronics", price: 400,  stock: 10,  rating: 4.6, onSale: true  },
  { name: "Keyboard",   category: "electronics", price: 80,   stock: 25,  rating: 4.4, onSale: false },
  { name: "Mug",        category: "kitchen",     price: 12,   stock: 100, rating: 4.1, onSale: false },
  { name: "Bottle",     category: "kitchen",     price: 18,   stock: 80,  rating: 4.3, onSale: true  },
  { name: "Blender",    category: "kitchen",     price: 90,   stock: 0,   rating: 4.0, onSale: false },
];

/* ============================================================
   BUILD THE 11   (3 cases each — all must pass)
   ============================================================ */

// ----- 1. Count them (WORKED EXAMPLE) -----
function countProducts(db) {
  return db.length;
}
console.log(countProducts(products)); // 15
// TEST 1:  countProducts(products)   ->  15
// TEST 2:  countProducts([])         ->  0
// TEST 3:  countProducts([products[0]]) -> 1

// ----- 2. filter by category -----
// Write `byCategory(db, cat)` -> array of products in that category.
function byCategory(db, cat) {
  return db.filter((p) => p.category === cat);
}

// console.log(byCategory(products, "electronics").length);
// TEST 1:  byCategory(products,"electronics").length   ->  5
// TEST 2:  byCategory(products,"kitchen").length       ->  3
// TEST 3:  byCategory(products,"toys").length          ->  0

// ----- 3. filter + condition — in stock -----
// Write `inStock(db)` -> products with stock > 0.
function inStock(db) {
  return db.filter((p) => p.stock > 0);
}

// console.log(inStock(products).length);
// TEST 1:  inStock(products).length                                ->  14
// TEST 2:  inStock(products).map(p => p.name).includes("Pen")  ->  true
// TEST 3:  inStock(products).map(p => p.name).includes("Blender") -> false

// ----- 4. map — just the names -----
// Write `allNames(db)` -> array of every product name.
function allNames(db) {
  return db.map((p) => p.name);
}

// console.log(allNames(products)[0]);
// TEST 1:  allNames(products)[0]       ->  "Laptop"
// TEST 2:  allNames(products).length   ->  15
// TEST 3:  allNames(products)[14]      ->  "Blender"

// ----- 5. find by name -----
// Write `findProduct(db, name)` -> the one object, or undefined.
function findProduct(db, name) {
  return db.find((p) => p.name === name);
}

// console.log(findProduct(products, "Watch").price);
// TEST 1:  findProduct(products,"Watch").price    ->  250
// TEST 2:  findProduct(products,"Watch").rating   ->  4.8
// TEST 3:  findProduct(products,"Nope")           ->  undefined

// ----- 6. reduce — total stock -----
// Write `totalStock(db)` -> sum of every product's stock.
function totalStock(db) {
  return db.reduce((acc, p) => acc + p.stock, 0);
}

// console.log(totalStock(products));
// TEST 1:  totalStock(products)          ->  1095
// TEST 2:  totalStock([])                ->  0
// TEST 3:  totalStock([{stock:3},{stock:4}]) -> 7

// ----- 7. filter boolean — on sale -----
// Write `onSaleItems(db)` -> products where onSale is true.
function onSaleItems(db) {
  return db.filter((p) => p.onSale === true);
}

// console.log(onSaleItems(products).length);
// TEST 1:  onSaleItems(products).length                                 ->  7
// TEST 2:  onSaleItems(products).map(p => p.name).includes("Phone") ->  true
// TEST 3:  onSaleItems(products).map(p => p.name).includes("Laptop")-> false

// ----- 8. filter + condition — expensive -----
// Write `expensive(db)` -> products with price > 200.
function expensive(db) {
  return db.filter((p) => p.price > 200);
}

// console.log(expensive(products).length);
// TEST 1:  expensive(products).length                                  ->  5
// TEST 2:  expensive(products).map(p => p.name).includes("Watch")  ->  true
// TEST 3:  expensive(products).map(p => p.name).includes("Lamp")   ->  false

// ----- 9. sort — cheapest first -----
// Write `cheapest(db)` -> NEW array sorted by price, lowest first.
// Hint: [...db].sort((a,b) => a.price - b.price)
function cheapest(db) {
  return [...db].sort((a, b) => a.price - b.price);
}

// console.log(cheapest(products)[0].name);
// TEST 1:  cheapest(products)[0].name     ->  "Pen"
// TEST 2:  cheapest(products)[0].price    ->  2
// TEST 3:  cheapest(products)[14].name    ->  "Laptop"

// ----- 10. chain — filter + sort + map -----
// Write `electronicsOnSaleByPrice(db)` -> electronics that are on sale,
// sorted most-expensive first, names only.
function electronicsOnSaleByPrice(db) {
  return db
    .filter((p) => p.category === "electronics" && p.onSale === true)
    .sort((a, b) => b.price - a.price)
    .map((p) => p.name);
}

// console.log(electronicsOnSaleByPrice(products));
// TEST 1:  electronicsOnSaleByPrice(products)[0]       ->  "Phone"
// TEST 2:  electronicsOnSaleByPrice(products).length   ->  3
// TEST 3:  electronicsOnSaleByPrice(products)[2]       ->  "Headphones"

// ----- 11. reduce TWO fields — inventory value (the hard one) -----
// Write `inventoryValue(db)` -> sum of (price * stock) across all products.
// Hint: db.reduce((acc, p) => acc + p.price * p.stock, 0)
function inventoryValue(db) {
  return db.reduce((acc, p) => acc + p.price * p.stock, 0);
}

// console.log(inventoryValue(products));
// TEST 1:  inventoryValue(products)                  ->  43940
// TEST 2:  inventoryValue([])                        ->  0
// TEST 3:  inventoryValue([{price:10,stock:2}])      ->  20

/* ============================================================
   ARRAYS 6 — FIFA PLAYERS DATABASE (final boss: GROUPING)
   ------------------------------------------------------------
   187 players. Files 3–5 grouped with a hand-written loop.
   THIS file does grouping the array-method way: reduce builds
   an OBJECT, then Object.entries turns it back into an array
   you can sort. No `for` loops anywhere — methods only.
   Run:  node 6-database-fifa.js
   ============================================================ */

// ---- DATA (generated with array methods, 100% deterministic) ----
// Fields: id, name, nation, club, position (GK/DEF/MID/FWD),
//         age, rating (60-99), goals, value (millions €)
const NATIONS = [
  "Brazil",
  "France",
  "Argentina",
  "Spain",
  "England",
  "Germany",
  "Portugal",
  "Netherlands",
];
const CLUBS = [
  "Madrid",
  "Barca",
  "City",
  "Bayern",
  "PSG",
  "Liverpool",
  "Juventus",
  "Milan",
];
function positionFor(i) {
  const r = (i * 7) % 10; // spreads 0-9 evenly
  return r < 2 ? "GK" : r < 5 ? "DEF" : r < 8 ? "MID" : "FWD";
}
const players = Array.from({ length: 187 }, (_, i) => {
  const rating = 60 + ((i * 17) % 40);
  return {
    id: i + 1,
    name: `Player ${i + 1}`,
    nation: NATIONS[(i * 7) % NATIONS.length],
    club: CLUBS[(i * 3) % CLUBS.length],
    position: positionFor(i),
    age: 18 + ((i * 13) % 20),
    rating,
    goals: (i * 11) % 35,
    value: (rating - 50) * 3 + ((i * 11) % 35),
  };
});

/* ============================================================
   GROUPING CHEAT SHEET (the only new idea in this file)
   ------------------------------------------------------------
   Grouping = turn a flat ARRAY into an OBJECT keyed by a field.
   The engine is reduce: start with {}, fold each item in.

   // COUNT per key:  {} -> { key: howMany }
   // arr.reduce((acc, x) => {
   //   acc[x.field] = (acc[x.field] || 0) + 1;   // +1 each time
   //   return acc;                               // ALWAYS return acc
   // }, {});

   // SUM per key:  swap the +1 for + x.someNumber
   //   acc[x.field] = (acc[x.field] || 0) + x.amount;

   // BUCKET per key:  collect the whole items into arrays
   //   (acc[x.field] ||= []).push(x);   // ||= makes the [] first time

   // OBJECT <-> ARRAY bridge (so you can sort groups):
   //   Object.keys(o)     -> ["GK","DEF",...]
   //   Object.values(o)   -> [38, 56, ...]
   //   Object.entries(o)  -> [["GK",38], ["DEF",56], ...]   <-- pairs!
   //   Object.fromEntries(pairs) -> back to an object
   //
   //   "sort groups by their number, biggest first":
   //   Object.entries(o).sort((a,b) => b[1] - a[1]).map(([k]) => k)
   ============================================================ */

/* ============================================================
   BUILD THE 12   (3 cases each — all must pass)
   ============================================================ */

// ----- 1. bucket per key (WORKED EXAMPLE) -----
// Group players into { position: [those players] }.
function groupByPosition(db) {
  return db.reduce((acc, p) => {
    (acc[p.position] ||= []).push(p);
    return acc;
  }, {});
}
console.log(groupByPosition(players).GK.length); // 38
// TEST 1:  groupByPosition(players).GK.length            ->  38
// TEST 2:  groupByPosition(players).DEF.length           ->  56
// TEST 3:  Object.keys(groupByPosition(players)).length  ->  4

// ----- 2. count per key — clubs -----
// Write `countByClub(db)` -> { club: howMany players }.
function countByClub(db) {
  return db.reduce((acc, p) => {
    acc[p.club] = (acc[p.club] || 0) + 1;
    return acc;
  }, {});
}

// console.log(countByClub(players).Madrid);
// TEST 1:  countByClub(players).Madrid             ->  24
// TEST 2:  countByClub(players).Liverpool          ->  23
// TEST 3:  Object.keys(countByClub(players)).length ->  8

// ----- 3. count per key — positions -----
// Write `countByPosition(db)` -> { position: howMany }.
function countByPosition(db) {
  return db.reduce((acc, p) => {
    acc[p.position] = (acc[p.position] || 0) + 1;
    return acc;
  }, {});
}

// console.log(countByPosition(players).MID);
// TEST 1:  countByPosition(players).GK    ->  38
// TEST 2:  countByPosition(players).MID   ->  56
// TEST 3:  countByPosition(players).FWD   ->  37

// ----- 4. sum per key — goals per nation -----
// Write `goalsByNation(db)` -> { nation: total goals }.
function goalsByNation(db) {
  return db.reduce((acc, p) => {
    acc[p.nation] = (acc[p.nation] || 0) + p.goals;
    return acc;
  }, {});
}

// console.log(goalsByNation(players).Portugal);
// TEST 1:  goalsByNation(players).Portugal   ->  456
// TEST 2:  goalsByNation(players).Germany    ->  343
// TEST 3:  goalsByNation(players).Brazil     ->  348

// ----- 5. sum per key — squad value per club -----
// Write `valueByClub(db)` -> { club: total value }.
function valueByClub(db) {
  return db.reduce((acc, p) => {
    acc[p.club] = (acc[p.club] || 0) + p.value;
    return acc;
  }, {});
}

// console.log(valueByClub(players).Liverpool);
// TEST 1:  valueByClub(players).Liverpool   ->  2770
// TEST 2:  valueByClub(players).Madrid      ->  2196
// TEST 3:  valueByClub(players).City        ->  2599

// ----- 6. group THEN average — rating per position -----
// Write `avgRatingByPosition(db)` -> { position: avg rating, Math.round }.
// Hint: groupByPosition first, then Object.fromEntries(Object.entries(...).map(...)).
function avgRatingByPosition(db) {
  const groups = groupByPosition(db);
  const entries = Object.entries(groups).map(([pos, list]) => {
    const total = list.reduce((sum, p) => sum + p.rating, 0);
    return [pos, Math.round(total / list.length)];
  });
  return Object.fromEntries(entries);
}

// console.log(avgRatingByPosition(players).FWD);
// TEST 1:  avgRatingByPosition(players).FWD   ->  84
// TEST 2:  avgRatingByPosition(players).GK    ->  76
// TEST 3:  avgRatingByPosition(players).DEF   ->  78

// ----- 7. group THEN pick max — best player per position -----
// Write `bestByPosition(db)` -> { position: NAME of highest-rated player }.
// Hint: per group, v.reduce((best,p) => p.rating > best.rating ? p : best).name
function bestByPosition(db) {
  const groups = groupByPosition(db);
  const entries = Object.entries(groups).map(([pos, list]) => {
    const best = list.reduce((bestPlayer, p) => p.rating > bestPlayer.rating ? p : bestPlayer);
    return [pos, best.name];
  });
  return Object.fromEntries(entries);
}

// console.log(bestByPosition(players).FWD);
// TEST 1:  bestByPosition(players).FWD   ->  "Player 8"
// TEST 2:  bestByPosition(players).DEF   ->  "Player 3"
// TEST 3:  bestByPosition(players).GK    ->  "Player 24"

// ----- 8. count into custom buckets — age brackets -----
// Write `countByAgeBracket(db)` -> { u21, prime, veteran }
function countByAgeBracket(db) {
  return db.reduce((acc, p) => {
    if (p.age < 21) {
      acc.u21 = (acc.u21 || 0) + 1;
    } else if (p.age <= 29) {
      acc.prime = (acc.prime || 0) + 1;
    } else {
      acc.veteran = (acc.veteran || 0) + 1;
    }
    return acc;
  }, { u21: 0, prime: 0, veteran: 0 });
}