import React from 'react';

import MapCompo from './MapCompo';
import FilterCompo from './FilterCompo';

export default class Compo extends React.Component {
  render() {
    return (
      <div
        style={{
          border: 'solid black 5px',
          width: '50%',
          margin: '3px',
        }}>
        <h1>03. component</h1>
        <MapCompo data={data} />
        <FilterCompo data={data} />
      </div>
    );
  }
}
const data = [
  { name: '키위', age: 33 },
  { name: '망고', age: 47 },
  { name: '사과', age: 19 },
];
