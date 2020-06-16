import React from 'react';

export default class FilterCompo extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: '#00ff11', padding: '10px' }}>
        {this.props.data
          .filter((li) => li.age >= 20)
          .map((li, idx) => {
            return (
              <p key={`key-${idx}`}>
                <span>
                  {li.name} : {li.age}
                </span>
              </p>
            );
          })}
      </div>
    );
  }
}
