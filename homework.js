const calc = {
  add: (a, b) => {
    return a + b;
  },
  sub: (a, b) => {
    return a - b;
  },
  gop: (a, b) => {
    return a * b;
  },
  nan: (a, b) => {
    return a / b;
  },
};
a=2;
b=4;
console.log("주어진 수:" + a + " " + b);

console.log("덧셈 결과:" + calc.add(a, b));
console.log("뺄셈 결과:" + calc.sub(a, b));
console.log("곱셈 결과:" + calc.gop(a, b));
console.log("나눗셈 결과: " + calc.nan(a, b));
