export function gcdBruteForce(a: number, b: number): number {
  const absA = Math.abs(a);
  const absB = Math.abs(b);
  const upperBound = Math.min(absA, absB);

  for (let i = upperBound; i >= 1; i--) {
    if (absA % i == 0 && absB % i == 0) {
      return i;
    }
  }

  return 0;
}
