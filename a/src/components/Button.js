'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var Button = function (_a) {
  var props = tslib_es6.__rest(_a, []);

  return /*#__PURE__*/React__default["default"].createElement("button", tslib_es6.__assign({}, props));
};

var ButtonStyled = styled__default["default"](Button).withConfig({
  displayName: "Button__ButtonStyled",
  componentId: "sc-alzj02-0"
})(templateObject_1 || (templateObject_1 = tslib_es6.__makeTemplateObject(["\n  background-color: #fff;\n  border-color: #dbdbdb;\n  border-width: 1px;\n  color: #363636;\n  cursor: pointer;\n  justify-content: center;\n  padding-bottom: calc(0.5em - 1px);\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-top: calc(0.5em - 1px);\n  text-align: center;\n  white-space: nowrap;\n\n  &:hover {\n    border-color: #b5b5b5;\n    color: #363636;\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n  }\n\n  &:active {\n    border-color: #4a4a4a;\n    color: #363636;\n  }\n"], ["\n  background-color: #fff;\n  border-color: #dbdbdb;\n  border-width: 1px;\n  color: #363636;\n  cursor: pointer;\n  justify-content: center;\n  padding-bottom: calc(0.5em - 1px);\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-top: calc(0.5em - 1px);\n  text-align: center;\n  white-space: nowrap;\n\n  &:hover {\n    border-color: #b5b5b5;\n    color: #363636;\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n  }\n\n  &:active {\n    border-color: #4a4a4a;\n    color: #363636;\n  }\n"])));
var templateObject_1;

module.exports = ButtonStyled;
//# sourceMappingURL=Button.js.map
