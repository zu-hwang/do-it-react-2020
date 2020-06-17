import React from 'react';
import PTypes from 'prop-types';

// 불린타임으로 사용할때는
class PropTypeBool extends React.Component {
  render() {
    return (
      <>
        {this.props.boolean ? (
          <h3 style={{ color: 'red' }}>참이군</h3>
        ) : (
          <h3 style={{ color: 'blue' }}>거짓이군</h3>
        )}
      </>
    );
  }
}

PropTypeBool.propTypes = {
  boolean: PTypes.bool,
};

export default PropTypeBool;
