function factorial(n) {
  return n !== 0 ? factorial(n - 1) : 1;
}

factorial(5);
