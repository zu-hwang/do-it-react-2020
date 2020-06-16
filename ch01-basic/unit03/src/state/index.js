import React from 'react';
// State
import StateExample from './StateExample';
import ForceUpdate from './ForceUpdate';
import Lifecycle from './Lifecycle';
import NewCounter from './NewCounter';

export class States extends React.Component {
  render() {
    return (
      <div
        style={{
          border: 'solid black 5px',
          width: '50%',
          margin: '3px',
        }}>
        <StateExample></StateExample>
        <ForceUpdate></ForceUpdate>
        <Lifecycle></Lifecycle>
        <NewCounter></NewCounter>
      </div>
    );
  }
}
