import React from 'react';
import PTypes from 'prop-types';

class PropTypeChild extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: '#333',
          display: 'inline-block',
          padding: '20px',
        }}>
        {this.props.children}
      </div>
    );
  }
}

PropTypeChild.propTypes = {
  children: PTypes.node,
};

export default PropTypeChild;
