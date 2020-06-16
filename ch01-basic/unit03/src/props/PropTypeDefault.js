import React from 'react';
import PTypes from 'prop-types';

class PropTypeDefault extends React.Component {
  render() {
    let msg1 = '';
    if (this.props.boolValue === false) {
      msg1 = 'boolValue 기본값은 false';
    }
    let msg2 = '';
    if (this.props.boolValueWithoutDefault === false) {
      msg2 = 'boolValueWithoutDefault 기본값이 false';
    }
    return (
      <div className='message-container'>
        {msg1}
        {msg2}
      </div>
    );
  }
}

// 프로퍼티 타입 지정
PropTypeDefault.propTypes = {
  boolValue: PTypes.bool,
  boolValueWithoutDefault: PTypes.bool,
};

// 프로퍼티 기본값 선언
PropTypeDefault.defaultProps = {
  boolValue: false,
};

export default PropTypeDefault;
