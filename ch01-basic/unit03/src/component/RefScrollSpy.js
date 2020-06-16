import React from 'react';

export default class RefScrollSpy extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  // ! DOM요서 ref활용하여 객체지정하기
  setRef = (ref) => {
    this.ref = ref;
  };

  checkPosition = () => {
    if (this.state.count < 100) {
      if (this.ref.getBoundingClientRect().top < window.innerHeight) {
        this.setState({ count: this.state.count + 1 }, () => {
          console.log('데이터 로딩!' + this.state.count);
        });
        // * 여기에 스크롤이 내려가면 데이터 추가 로딩 되도록 코드 작성
      } else {
        console.log('exit');
      }
    } else {
      window.removeEventListener('scroll', this.checkPosition);
      console.log('이벤트 제거!' + this.state.count);
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.checkPosition); // 돔이 전체 그려지고나면 이벤트 실행
    this.checkPosition();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition); // 이건 언제 ..실행 되려나..
    console.log('언마운트!');
  }
  render() {
    return (
      <>
        <div ref={this.setRef}>??</div>
      </>
    );
  }
}
