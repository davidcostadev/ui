import React from 'react';
import styled from 'styled-components';

export const Input = ({ ...props }) => {
  return <input {...props} />;
};

const InputStyled = styled(Input)`
  color: red;
`;

export default InputStyled;
