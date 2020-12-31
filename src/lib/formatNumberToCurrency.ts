export const formatNumberToCurrency = (
  value: number,
  lang: string,
  currency: string,
  noDecimal: boolean = false
): string => {
  const separatorDecimal = new Intl.NumberFormat(lang, {
    style: 'decimal',
  })
    .format(11.11)
    .replace(/\d/g, '');

  const withDecimal = noDecimal ? parseInt(value.toFixed(0), 10) : value;

  const currencyNumber = new Intl.NumberFormat(lang, { style: 'currency', currency }).format(
    withDecimal
  );

  if (noDecimal) {
    const [onlyNoDecimal] = currencyNumber.split(separatorDecimal);
    return onlyNoDecimal;
  }

  return currencyNumber;
};

export default formatNumberToCurrency;
