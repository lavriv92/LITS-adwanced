function factorial(n) {
  if (n == 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

const f = factorial(5);

console.log(f);
