'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var styled = require('styled-components');
var parseValueToNumber = require('../lib/parseValueToNumber.js');
var formatNumberToCurrency = require('../lib/formatNumberToCurrency.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

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
      props = tslib_es6.__rest(_a, ["value", "lang", "currency", "noDecimal", "onChange"]);

  var _f = tslib_es6.__read(React.useState(formatNumberToCurrency.formatNumberToCurrency(value, lang, currency, noDecimal)), 2),
      currentValue = _f[0],
      setValue = _f[1];

  var handleChange = function (_a) {
    var value = _a.target.value;
    var parsedValue = parseValueToNumber.parseValueToNumber(value, noDecimal);
    setValue(formatNumberToCurrency.formatNumberToCurrency(parsedValue, lang, currency, noDecimal));
    onChange(parsedValue);
  };

  return /*#__PURE__*/React__default["default"].createElement("input", tslib_es6.__assign({}, props, {
    type: "text",
    onChange: handleChange,
    value: currentValue
  }));
}; // WIP

var InputCurrencyStyled = styled__default["default"](InputCurrency).withConfig({
  displayName: "InputCurrency__InputCurrencyStyled",
  componentId: "sc-138sm8x-0"
})(templateObject_1 || (templateObject_1 = tslib_es6.__makeTemplateObject(["\n  color: red;\n"], ["\n  color: red;\n"])));
var templateObject_1;

exports.InputCurrency = InputCurrency;
exports["default"] = InputCurrencyStyled;
//# sourceMappingURL=InputCurrency.js.map
