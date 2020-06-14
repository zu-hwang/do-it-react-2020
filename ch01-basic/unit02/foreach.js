/**
 ** 더 간결한 forEach문
 * 일반 es6이전 코드와 비교해 보자!
 */

function parse2(qs) {
  const chunks = qs.split('&');
  let result = {};
  chunks.forEach((chunk) => {
    // kiwi=10
    const [key, value] = chunk.split('='); // 구조분해 할당 > kiwi, 10
    result[key] = Number.isNaN(value) ? value : Number(value); // result[kiwi]= 10
  });
  return result;
}

console.log(parse2('kiwi=10&apple=20&orange=30'));
// { kiwi: 10, apple: 20, orange: 30 }

/**
 * for문 대신 forEach문 사용
 */

function parse(qs) {
  const chunks = qs.split('&');
  let result = {};
  chunks.forEach((chunk) => {
    const parts = chunk.split('=');
    const key = parts[0];
    const value = Number.isNaN(parts[1]) ? parts[1] : Number(parts[1]);
    result[key] = value;
  });
  return result;
}

console.log(parse('kiwi=10&apple=20&orange=30'));
// { kiwi: 10, apple: 20, orange: 30 }
