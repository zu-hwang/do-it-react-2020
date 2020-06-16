// delay : 호출 생략 시간
// func : 화면상 위치, 스크롤 위치 파알하여 서버요청 하는 함수
function throttle(func, delay) {
  // ! 현재 스크롤 위치를 확인하는 함수와, 딜레이 시간이 인수로 주어진다.
  let lastFunc; // ? 셋타임아웃 클리어 id
  let lastRan; // ? 마지막 함수호출 시간 저장
  return function (...args) {
    // args = func, delay
    const context = this; // ?
    if (!lastRan) {
      // 초기 실행
      func.call(context, ...args); // 인자로 들어온 함수를 실행
      lastRan = Date.now(); // 현재 시간을 저장
    } else {
      if (lastFunc) clearTimeout(lastFunc); // 이전에 ID 값이 존재하면 클리어
      lastFunc = setTimeout(function () {
        // 새로운 id 저장
        if (Date.now() - lastRan >= delay) {
          // 지연시간 계산(Date.now()-lastRan)이 delay보다 커야만 함수 실행
          func.call(context, ...args); // checkPoint 함수 실행, 결과에 따라 fetch 실행
          lastRan = Date.now(); // 현재 시간 업데이트
        }
      }, delay - (Date.now() - lastRan));
    }
  };
}
var checkPosition = () => {
  // 옵셋 크기 지정
  const offset = 500;
  // 현재 페이지의 위치를 저장
  const currentScrollPosition = window.pageYOffset;
  // document.body.offsetHeight : 보더라인을 포함한 화면의 높이
  // window.innerHeight : 브라우저의 실제 화면그리는 높이
  const pageBottomPosition =
    // ? 왜 pageBottomPosition이 이렇게 되는지 이해가 잘 안됨!
    // 보더라인 포함 화면의 높이 - 브라우저의 실제화면 높이 - 오프셋 지정 500
    document.body.offsetHeight - window.innerHeight - offset;
  if (currentScrollPosition >= pageBottomPosition) {
    // fetch('/page/next')
    console.log('다음 페이지 로딩');
  }
};

var infiniteScroll = throttle(checkPosition, 300);
window.addEventListener('scroll', infiniteScroll);
