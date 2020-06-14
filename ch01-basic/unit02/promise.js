/**
 * 콜백지옥에서 벋어나기위해 ES6 부터 Promise지원이 시작 됬다.
 */

// 실제 Promise 함수의 모습
class Promise {
  constructor(fn) {
    const resolve = (...args) => {
      // 리졸브 : 결과진행, 잘 될때 반환
      if (typeof this.onDone === 'function') {
        this.onDone(...args);
      }
      if (typeof this.onComplete === 'function') {
        this.onComplete();
      }
    };
    const reject = (...args) => {
      // 리젝트 : 거절, 실패 했을때 반환
      if (typeof this.onError === 'function') {
        this.onError(...args);
      }
      if (typeof this.onComplete === 'function') {
        this.onComplete();
      }
    };
    fn(resolve, reject);
  }
  then(onDone, onError) {
    this.onDone = onDone;
    this.onError = onError;
    return this;
  }
  catch(onError) {
    // 에러발생했을때 에러내용을 반환한다.
    this.onError = onError;
    return this;
  }
  finally(onComplete) {
    // 모든 비동기 처리가 끝날을 경우 반환한다.
    this.onComplete = onComplete;
    return this;
  }
}

/**
 * old-asyncfunc를 Promise로 변환해보자
 */

// ! 프로미스를 반환하는 함수 work1, work2, work3
const work1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('작업 1 완료!'), 100);
  });
};
const work2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('작업 2 완료!'), 200);
  });
};
const work3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('작업 3 완료!'), 300);
  });
};

// ! 긴급작업 함수
function urgentWork() {
  console.log('긴급작업!');
}

// ! 작업완료 메세지 출력 함수
const nextWorkOnDone = (msg1) => {
  console.log('done after 100ms - ' + msg1);
  return work2();
};

// * 시작 : work1 함수 호출
// * 다음 : 메세지출력
// * 다음 : nextWorkOnDone이 work2 리턴, works2에게 msg2(리졸브내용)이 전달되며
// * nextWorkOnDone의 msg1이> msg2>msg3으로 전달되기 때문에 출력되는 메세지는 work1의 '작업1완료'가 되며,
// * 출력 문자는 'done after 600ms-'가 된다.

work1()
  .then(nextWorkOnDone)
  .then((msg2) => {
    console.log('done after 200ms - ' + msg2);
  })
  .then((msg3) => {
    console.log('done after 600ms - ' + msg3);
  });

urgentWork();

// - 출력
// 긴급작업!
// done after 600ms - 작업 1 완료!
