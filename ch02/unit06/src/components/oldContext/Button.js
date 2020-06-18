import React, { PureComponent } from 'react';
import PTypes from 'prop-types';

export default class Button extends PureComponent {
  render() {
    const { onPress, children } = this.props;
    return <button onClick={onPress}>{children}</button>;
  }
}

// 컴포넌트 props의 데이터 타입 지정
Button.propTypes = {
  children: PTypes.node.isRequired,
  xsmall: PTypes.bool,
  small: PTypes.bool,
  large: PTypes.bool,
  xlarge: PTypes.bool,
  secondary: PTypes.bool,
  primary: PTypes.bool,
  onPress: PTypes.func,
};

// 컴포넌트 props 초기값 설정
Button.defaultProps = {
  onPress: () => {},
  xsmall: false,
  small: false,
  large: false,
  xlarge: false,
  secondary: false,
  primary: false,
};
