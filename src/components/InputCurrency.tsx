import { useState, ChangeEvent } from 'react';
import { parseValueToNumber } from '../lib/parseValueToNumber';
import { formatNumberToCurrency } from '../lib/formatNumberToCurrency';

type Props = {
  value: number;
  lang: string;
  currency: string;
  noDecimal?: boolean;
  onChange: (value: number) => void;
  className?: string;
};

export const InputCurrency = ({
  value = 0,
  lang = 'en-US',
  currency = 'USD',
  noDecimal = false,
  onChange,
  className = '',
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

  return (
    <input
      {...props}
      type="text"
      className={`text-red-500 ${className}`}
      onChange={handleChange}
      value={currentValue}
    />
  );
};

export default InputCurrency;
