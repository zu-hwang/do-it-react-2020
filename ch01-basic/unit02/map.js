/**
 * map()은 새로운 배열을 반환한다.
 */

function parse(qs) {
  const chunks = qs.split('&'); // [ 'kiwi=10', 'apple=20', 'orange=30']
  const result = chunks.map((chunk) => {
    const [key, value] = chunk.split('='); //key='kiwi', value='10'
    return { key: key, value: value }; // {key : 'kiwi', value : '10'} 이 result에 쌓인다.
  });
  return result;
}

console.log(parse('kiwi=10&apple=20&orange=30'));
// [
//   { key: 'kiwi', value: '10' },
//   { key: 'apple', value: '20' },
//   { key: 'orange', value: '30' }
// ]

// ! 기존 for문과, forEach가 리턴 하는 형대와 다르다.
// ! map(), reduce()함수를 함께 사용하여 for문 forEach()와 같은 결과를 낼 수 있다.
