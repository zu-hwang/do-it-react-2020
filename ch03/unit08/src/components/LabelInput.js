import React from 'react';
import styled from 'styled-components';
import { flexCenter, mainFont, depth3 } from '../util/theme';

const LabelInput = ({ id, name, value, onChange, readOnly }) => {
  return (
    <FormUnitBox>
      <Label htmlFor={id}>{name}</Label>
      {readOnly ? (
        <Input name={name} id={id} type='text' value={value} readOnly />
      ) : (
        <Input
          name={name}
          id={id}
          type='text'
          value={value}
          onChange={onChange}
        />
      )}
    </FormUnitBox>
  );
};

const FormUnitBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: 6px;
`;
const Input = styled.input`
  border: 1px solid ${(props) => props.theme.middleGray};
  border-radius: 2px;
  padding: 10px;
  width: 170px;
  color: ${(props) => props.theme.black};
  &::placeholder {
    font-size: 12px;
  }
`;
const Label = styled.label`
  position: absolute;
  top: -12px;
  font-size: 10px;
  & {
    color: ${(props) => props.theme.darkGray};
  }
`;
export default LabelInput;
