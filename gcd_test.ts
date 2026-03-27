import { assertEquals } from "@std/assert";
import { gcdBruteForce, gcdEuclid } from "./gcd.ts";

const gcdTests = [
  { a: 1, b: 1, gcd: 1 },
  { a: 1, b: 2, gcd: 1 },
  { a: 2, b: 2, gcd: 2 },
  { a: 3, b: 4, gcd: 1 },
  { a: 6, b: 9, gcd: 3 },
  { a: 81, b: 36, gcd: 9 },
  { a: 12, b: 18, gcd: 6 },
  { a: 17, b: 19, gcd: 1 },
  { a: 0, b: 15, gcd: 15 },
  { a: 15, b: 0, gcd: 15 },
];

Deno.test("gcdBruteForce table-driven", () => {
  for (const { a, b, gcd } of gcdTests) {
    const actual = gcdBruteForce(a, b);
    assertEquals(actual, gcd);
  }
});

Deno.test("gcdEuclid matches brute-force cases", () => {
  for (const { a, b, gcd } of gcdTests) {
    const actual = gcdEuclid(a, b);
    assertEquals(actual, gcd);
  }
});
