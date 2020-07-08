import React from 'react';
import styled from 'styled-components';

const BasicBtn = ({ name, color }) => {
  return <Button color={color}>{name}</Button>;
};

const Button = styled.button`
  border: 1px solid ${(props) => props.theme.middleGray};
  border-radius: 3px;
  width: 70px;
  padding: 6px 10px;
  background-color: ${(props) =>
    props.color === 'point' ? props.theme.point : props.theme.white};
  color: ${(props) =>
    props.color === 'point' ? props.theme.white : props.theme.point};

  &:hover {
    cursor: pointer;
  }
`;

export default BasicBtn;
