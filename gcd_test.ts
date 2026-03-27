import { assertEquals } from "@std/assert";
import { gcdBruteForce } from "./gcd.ts";

Deno.test("gcdBruteForce(1, 1) is 1", () => {
  // Trivial base case before broader scenarios.
  const gcd = gcdBruteForce(1, 1);
  assertEquals(gcd, 1);
});

Deno.test("gcdBruteForce(12, 18) is 6", () => {
  const gcd = gcdBruteForce(12, 18);
  assertEquals(gcd, 6);
});

Deno.test("gcdBruteForce(17, 19) is 1", () => {
  const gcd = gcdBruteForce(17, 19);
  assertEquals(gcd, 1);
});

Deno.test("gcdBruteForce handles zero", () => {
  assertEquals(gcdBruteForce(0, 15), 15);
  assertEquals(gcdBruteForce(15, 0), 15);
});
