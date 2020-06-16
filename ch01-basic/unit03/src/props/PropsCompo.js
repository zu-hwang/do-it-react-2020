import React from 'react';
import PTypes from 'prop-types';

class PropsCompo extends React.Component {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}

PropsCompo.propTypes = {
  // ! 컴포넌트.속성명으로는  propTypes !! 소문자로 시작하며
  name: PTypes.string, // ! 자료형지정에서는 모듈네임을 사용한다. 보통 PropTypes를 사용하는데 햇갈리니 변경함.
};

export default PropsCompo;
