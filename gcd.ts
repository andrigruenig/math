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

export function gcdEuclid(a: number, b: number): number {
  const x = Math.abs(a);
  const y = Math.abs(b);

  if (x == 0) {
    return y;
  }
  if (y == 0) {
    return x;
  }
  if (x == y) {
    return x;
  }

  const max = Math.max(x, y);
  const min = Math.min(x, y);
  const c = max - min;
  return gcdEuclid(min, c);
}
