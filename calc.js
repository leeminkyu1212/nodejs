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
  printhello: () => console.log("hello"),
};

module.exports = calc;
