import { __makeTemplateObject, __rest, __read, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React, { useState } from 'react';
import styled from 'styled-components';
import { parseValueToNumber } from '../lib/parseValueToNumber.js';
import { formatNumberToCurrency } from '../lib/formatNumberToCurrency.js';

var InputCurrency = function (_a) {
  var _b = _a.value,
      value = _b === void 0 ? 0 : _b,
      _c = _a.lang,
      lang = _c === void 0 ? 'en-US' : _c,
      _d = _a.currency,
      currency = _d === void 0 ? 'USD' : _d,
      _e = _a.noDecimal,
      noDecimal = _e === void 0 ? false : _e,
      onChange = _a.onChange,
      props = __rest(_a, ["value", "lang", "currency", "noDecimal", "onChange"]);

  var _f = __read(useState(formatNumberToCurrency(value, lang, currency, noDecimal)), 2),
      currentValue = _f[0],
      setValue = _f[1];

  var handleChange = function (_a) {
    var value = _a.target.value;
    var parsedValue = parseValueToNumber(value, noDecimal);
    setValue(formatNumberToCurrency(parsedValue, lang, currency, noDecimal));
    onChange(parsedValue);
  };

  return /*#__PURE__*/React.createElement("input", __assign({}, props, {
    type: "text",
    onChange: handleChange,
    value: currentValue
  }));
}; // WIP

var InputCurrencyStyled = styled(InputCurrency).withConfig({
  displayName: "InputCurrency__InputCurrencyStyled",
  componentId: "sc-138sm8x-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: red;\n"], ["\n  color: red;\n"])));
var templateObject_1;

export { InputCurrency, InputCurrencyStyled as default };
//# sourceMappingURL=InputCurrency.js.map
