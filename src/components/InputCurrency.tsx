import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { parseValueToNumber } from 'lib/parseValueToNumber';
import { formatNumberToCurrency } from 'lib/formatNumberToCurrency';

type Props = {
  value: number;
  lang: string;
  currency: string;
  noDecimal?: boolean;
  onChange: (value: number) => void;
};

export const InputCurrency = ({
  value = 0,
  lang = 'en-US',
  currency = 'USD',
  noDecimal = false,
  onChange,
  ...props
}: Props) => {
  const [currentValue, setValue] = useState(
    formatNumberToCurrency(value, lang, currency, noDecimal)
  );

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseValueToNumber(value, noDecimal);
    setValue(formatNumberToCurrency(parsedValue, lang, currency, noDecimal));
    onChange(parsedValue);
  };

  return <input {...props} type="text" onChange={handleChange} value={currentValue} />;
};

// WIP
const InputCurrencyStyled = styled(InputCurrency)`
  color: red;
`;

export default InputCurrencyStyled;
