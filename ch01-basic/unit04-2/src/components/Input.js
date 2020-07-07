import React from 'react';

const Input = (props) => {
  const { color, value, onChange } = props;
  console.log('color', color, ' value', value);
  const dark = { color: 'white', backgroundColor: 'black' };

  return (
    <div>
      <input
        defaultValue={value ? value : '빈칸'}
        style={color === 'dark' ? dark : {}}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
