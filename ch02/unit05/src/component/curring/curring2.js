//!  ((x*a)*b)+c 를 함수로 구현해보자.

const func = (a, b, c) => (x) => x * a * b + c;
const formula = func(2, 3, 4);
const x = 10;
const result = formula(x);
