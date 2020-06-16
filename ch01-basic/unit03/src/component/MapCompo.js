import React from 'react';

export default class MapCompo extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: '#ff0011', padding: '10px' }}>
        {this.props.data.map((li, idx) => {
          return (
            <div key={`index-${idx}`}>
              <span>
                {li.name} : {li.age}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

// * map()의 콜백함수의 2번째 인자는 index를 담는다.
//! return 키워드를 사용하지 않는다면 중괄호 대신 ()를 사용한다.
//! 만약 리턴내용이 1줄이라면 괄호 없이 리턴값을 => 옆에 바로 적는다.
