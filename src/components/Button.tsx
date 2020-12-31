import React from 'react';
import styled from 'styled-components';

const Button = ({ ...props }) => <button {...props} />;

const ButtonStyled = styled(Button)`
  background-color: #fff;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;

  &:hover {
    border-color: #b5b5b5;
    color: #363636;
  }

  &:focus:not(:active) {
    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
  }

  &:active {
    border-color: #4a4a4a;
    color: #363636;
  }
`;

export default ButtonStyled;
