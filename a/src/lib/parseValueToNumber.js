'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var parseValueToNumber = function (value, noDecimal) {
  if (noDecimal === void 0) {
    noDecimal = false;
  }

  if (value.length) {
    var valueStr = value.replace(/[^0-9]/g, '').padStart(3, '0');

    if (Number.isNaN(parseInt(valueStr, 10))) {
      return 0;
    }

    var separator = noDecimal ? '' : '.';
    return parseFloat([valueStr.substr(0, valueStr.length - 2), valueStr.substr(-2)].join(separator));
  }

  return 0;
};

exports["default"] = parseValueToNumber;
exports.parseValueToNumber = parseValueToNumber;
//# sourceMappingURL=parseValueToNumber.js.map
