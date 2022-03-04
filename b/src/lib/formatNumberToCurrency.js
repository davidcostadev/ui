import { __read } from '../../node_modules/tslib/tslib.es6.js';

var formatNumberToCurrency = function (value, lang, currency, noDecimal) {
  if (noDecimal === void 0) {
    noDecimal = false;
  }

  var separatorDecimal = new Intl.NumberFormat(lang, {
    style: 'decimal'
  }).format(11.11).replace(/\d/g, '');
  var withDecimal = noDecimal ? parseInt(value.toFixed(0), 10) : value;
  var currencyNumber = new Intl.NumberFormat(lang, {
    style: 'currency',
    currency: currency
  }).format(withDecimal);

  if (noDecimal) {
    var _a = __read(currencyNumber.split(separatorDecimal), 1),
        onlyNoDecimal = _a[0];

    return onlyNoDecimal;
  }

  return currencyNumber;
};

export { formatNumberToCurrency as default, formatNumberToCurrency };
//# sourceMappingURL=formatNumberToCurrency.js.map
