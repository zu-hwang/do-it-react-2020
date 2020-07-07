import React from 'react';
import styled from 'styled-components';

const InputWithStyledComponent = (props) => {
  const { value, name, label, type, errorMessage, onChange } = props;
  console.log(props.value, props.value.length);
  return (
    <InputContainer>
      <Input
        id={`input-${name}`}
        value={value}
        name={name}
        type={type}
        errorMessage={errorMessage ? true : false}
        style={value.length}
        onChange={onChange}
      />
      <Label htmlFor={`input-${name}`} label>
        {label}
      </Label>
    </InputContainer>
  );
};

export default InputWithStyledComponent;

const InputContainer = styled.div`
  width: 200px;
  /* background-color: gray; */
`;
const Input = styled.input`
  color: ${(props) => (props.style < 3 ? 'black' : 'white')};
  background-color: ${(props) => (props.style < 3 ? 'greenyellow' : 'red')};
`;
const Label = styled.label`
  color: red;
`;
