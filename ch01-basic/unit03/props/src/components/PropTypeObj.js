import React from 'react';
import PTypes from 'prop-types';

class PropTypeObj extends React.Component {
  render() {
    const { objValue } = this.props;
    return (
      <>
        <div>객체값 : {String(Object.entries(objValue))}</div>
      </>
    );
  }
}

PropTypeObj.propTypes = {
  // 객체 프로퍼티
  objValue: PTypes.shape({
    name: PTypes.string,
    age: PTypes.number,
  }).isRequired,
};

export default PropTypeObj;
