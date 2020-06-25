import React, { PureComponent } from 'react';

export default class Madal extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div style={style.overlay}>
        <div style={style.wrapper}>
          <div style={style.container}>{children}</div>
        </div>
      </div>
    );
  }
}

const style = {
  overlay: {
    // 반투명 배경
    position: 'fixed',
    zIndex: 9999,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  wrapper: {
    //모달박스
    vertivalAlign: 'middle',
  },
  container: {
    // 내용 컨테이너
    margin: '40px auto 0px',
    padding: 10,
    backgroundColor: '#fff',
  },
};
