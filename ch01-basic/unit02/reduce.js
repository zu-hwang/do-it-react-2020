/**
 * map()과 함께 reduce()를 사용하여 for,forEach()문과 같은 결과를 출력해보자
 */

//! redece(콜백함수, 반환객체그릇);

function parse(qs) {
  const chunks = qs.split('&'); // ['kiwi=10','apple=20','orange=30']
  return chunks
    .map((chunk) => {
      const [key, value] = chunk.split('='); // kiwi, 10
      return { key: key, value: value }; // [{key:'kiwi', value:'10'},... ]
    })
    .reduce((result, item) => {
      result[item.key] = item.value; // result = {kiwi:'10'}
      return result; // 결과물을 {}에 담는다.
    }, {});
}

console.log(parse('kiwi=10&apple=20&orange=30'));
// { kiwi: '10', apple: '20', orange: '30' }
