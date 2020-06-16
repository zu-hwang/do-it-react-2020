import React from 'react';

class TodaysPlanApp extends React.Component {
  render() {
    const { onButtonClick, hasPlan } = this.props;
    return (
      <div className='body'>
        {hasPlan ? <h1>오늘은?</h1> : null}
        <button onClick={onButtonClick}>계획없음</button>
      </div>
    );
  }
}
