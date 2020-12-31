export const parseValueToNumber = (value: string, noDecimal: boolean = false): number => {
  if (value.length) {
    let valueStr = value.replace(/[^0-9]/g, '').padStart(3, '0');

    if (Number.isNaN(parseInt(valueStr, 10))) {
      return 0;
    }

    const separator = noDecimal ? '' : '.';

    return parseFloat(
      [valueStr.substr(0, valueStr.length - 2), valueStr.substr(-2)].join(separator)
    );
  }

  return 0;
};

export default parseValueToNumber;
