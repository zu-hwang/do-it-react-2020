// debounce.js 를 실행하려면 export를 제거해야 하며
// 실행후 다시 export를 넣어야 한다.

// export function debounce(func, delay) {
function debounce(func, delay) {
  // 인자로 함수와 딜레이 시간이 주어진다.
  let inDebounce; // 변수생성하지만,내용은 없음 false 상태
  return function (...args) {
    // 익명함수를 리턴한다.
    if (inDebounce) {
      // setTimeout이 있다면 clear!
      clearTimeout(inDebounce);
    }
    // 인자로 들어온 함수에 ...args를 넣고 지정시간 이후 발동!
    inDebounce = setTimeout(() => func(...args), delay);
  };
}

// ! 만약 딜레이시간이 3000밀리초 이상이면 > 콘솔로그 b 출력
// ! 만약 딜레이시간이 3000밀리초 이하면 > 콘솔로그 2,b 출력
const run = debounce((val) => console.log(val), 4000); // 4000 밀리초 뒤에 콘솔로그에 인자 내용을 출력한다.

run('a');
// 3초뒤에 실행큐에 등록 되기 때문에 debounce의 딜레이 지정 인자에 따라 콘솔 출력이 달라지게 된다.
setTimeout(() => run('b'), 3000);
run(2);
