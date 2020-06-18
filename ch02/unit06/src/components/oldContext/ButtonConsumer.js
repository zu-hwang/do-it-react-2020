import React from 'react';
import withLoadingContext from './withLoadingContext';

const ButtonConsumer = ({ loading, setLoading }) => {
  return (
    <button onClick={setLoading}>
      {loading ? (
        <span role='img' aria-label='emoji'>
          '컨슈머🥶'
        </span>
      ) : (
        <span role='img' aria-label='emoji'>
          '컨슈머🥺'
        </span>
      )}
    </button>
  );
};

export default withLoadingContext(ButtonConsumer);
