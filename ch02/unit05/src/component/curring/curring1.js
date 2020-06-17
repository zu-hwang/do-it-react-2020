function multiply(a, b) {
  return a * b;
}

function multiplyTwo(a) {
  return multiply(a, 2);
}

function multiplyX(x) {
  return function (a) {
    return multiply(a, x);
  };
}

/**
 * ! 위 multiplyX와 아래 화살표 함수와 같은 형태
 *
 * const multiplyX = x => a => multiply(a,x);
 *
 */

const multiplyThree = multiplyX(3);
const multiplyFour = multiplyX(4);

// ? func()() 형태의 호출방식에 익숙해지도록 하자~!

const result1 = multiplyThree(6); // multiplyX(3)(6) 3*6 = 18
const result2 = multiplyFour(6); //  multiplyX(4)(6) 4*6 = 24

// * 조합 compose()함수 로직
[func2, func3, func4].reduce(
  (prevFunc, nextFunc) => {
    return (value) => {
      return nextFunc(prevFunc(value));
    };
  },
  (k) => {
    return k;
  }
);
