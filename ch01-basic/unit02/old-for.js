function parse(qs) {
  var chunks = qs.split('&');
  var result = {};

  //* 올드 타입의 경우 for문을 이용해 객체 하나하나를 순회해야 한다.
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0]; // key = 'banana'
    // 숫자로 바꾼 parts[1]이 isNAN 이면 문자열(parts[1])로 대입, isNaN이 아니면 숫자타입(Number(parts[1]))으로 변경 대입
    var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value; // result = {banana:10}
  }
  return result;
}

console.log(parse('kiwi=10&apple=20&orange=30'));
// { kiwi: 10, apple: 20, orange: 30 }
