import { __extends, __spreadArray, __read } from '../../../node_modules/tslib/tslib.es6.js';
import React, { Component } from 'react';

/**
  code from https://github.com/suweya/react-verification-code-input
  @suweya by MIT
*/
var KEY_CODE = {
  backspace: 8,
  left: 37,
  up: 38,
  right: 39,
  down: 40
};

var ReactCodeInput =
/** @class */
function (_super) {
  __extends(ReactCodeInput, _super);

  function ReactCodeInput(props) {
    var _this = _super.call(this, props) || this;
    /**
     * Clear all field value & focus first field
     */


    _this.__clearvalues__ = function () {
      var fields = _this.props.fields;

      _this.setState({
        values: Array(fields).fill('')
      });

      _this.iRefs[0].current.focus();
    };

    _this.triggerChange = function (values) {
      if (values === void 0) {
        values = _this.state.values;
      }

      var _a = _this.props,
          onChange = _a.onChange,
          onComplete = _a.onComplete,
          fields = _a.fields;
      var val = values.join('');
      onChange && onChange(val);

      if (onComplete && fields && val.length >= fields) {
        onComplete(val);
      }
    };

    _this.triggerFocus = function () {
      var onFocus = _this.props.onFocus;
      onFocus && onFocus();
    };

    _this.onChange = function (e) {
      var index = parseInt(e.target.dataset.id);

      if (_this.props.type === 'number') {
        e.target.value = e.target.value.replace(/[^\d]/gi, '');
      } // this.handleKeys[index] = false;


      if (e.target.value === '' || _this.props.type === 'number' && !e.target.validity.valid) {
        return;
      }

      var fields = _this.props.fields;
      var next;
      var value = e.target.value;
      var values = _this.state.values;
      values = Object.assign([], values);

      if (value.length > 1 && fields) {
        var nextIndex = value.length + index - 1;

        if (nextIndex >= fields) {
          nextIndex = fields - 1;
        }

        next = _this.iRefs[nextIndex];
        var split = value.split('');
        split.forEach(function (item, i) {
          var cursor = index + i;

          if (cursor < fields) {
            values[cursor] = item;
          }
        });

        _this.setState({
          values: values
        });
      } else {
        next = _this.iRefs[index + 1];
        values[index] = value;

        _this.setState({
          values: values
        });
      }

      if (next) {
        next.current.focus();
        next.current.select();
      }

      _this.triggerChange(values);
    };

    _this.onKeyDown = function (e) {
      var index = parseInt(e.target.dataset.id);
      var prevIndex = index - 1;
      var nextIndex = index + 1;
      var prev = _this.iRefs[prevIndex];
      var next = _this.iRefs[nextIndex];

      switch (e.keyCode) {
        case KEY_CODE.backspace:
          e.preventDefault(); // @ts-ignore

          var vals = __spreadArray([], __read(_this.state.values), false);

          if (_this.state.values[index]) {
            vals[index] = '';

            _this.setState({
              values: vals
            });

            _this.triggerChange(vals);
          } else if (prev) {
            vals[prevIndex] = '';
            prev.current.focus();

            _this.setState({
              values: vals
            });

            _this.triggerChange(vals);
          }

          break;

        case KEY_CODE.left:
          e.preventDefault();

          if (prev) {
            prev.current.focus();
          }

          break;

        case KEY_CODE.right:
          e.preventDefault();

          if (next) {
            next.current.focus();
          }

          break;

        case KEY_CODE.up:
        case KEY_CODE.down:
          e.preventDefault();
          break;
      }
    }; // onKeyUp = e => {
    //   const index = parseInt(e.target.dataset.id);
    //   if (this.handleKeys[index]) {
    //     this.handleKeys[index] = false;
    //     const next = this.iRefs[index + 1];
    //     if (next) {
    //       next.current.focus();
    //     }
    //   }
    // };


    _this.onFocus = function (e) {
      e.target.select(e);

      _this.triggerFocus();
    };

    var fields = props.fields,
        values = props.values;
    var vals;
    var autoFocusIndex = 0;

    if (values && values.length && fields) {
      vals = [];

      for (var i = 0; i < fields; i++) {
        vals.push(values[i] || '');
      }

      autoFocusIndex = values.length >= fields ? 0 : values.length;
    } else {
      vals = Array(fields).fill('');
    }

    _this.state = {
      values: vals,
      autoFocusIndex: autoFocusIndex
    };
    _this.iRefs = [];

    if (fields) {
      for (var i = 0; i < fields; i++) {
        _this.iRefs.push( /*#__PURE__*/React.createRef());
      }
    }

    _this.id = +new Date();
    return _this; // this.handleKeys = Array(fields).fill(false);
  }

  ReactCodeInput.prototype.render = function () {
    var _this = this;

    var _a = this.state,
        values = _a.values,
        autoFocusIndex = _a.autoFocusIndex;
    var _b = this.props,
        loading = _b.loading,
        title = _b.title,
        fieldHeight = _b.fieldHeight,
        fieldWidth = _b.fieldWidth,
        fields = _b.fields,
        autoFocus = _b.autoFocus,
        className = _b.className,
        type = _b.type;
    var INPUT_STYLE = {
      width: fieldWidth,
      height: fieldHeight
    };
    var ROOT_STYLE = {
      width: fields * fieldWidth
    };
    var LOADING_STYLE = {
      lineHeight: "".concat(fieldHeight, "px")
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "react-code-input-container' ".concat(className),
      style: ROOT_STYLE
    }, title && /*#__PURE__*/React.createElement("p", {
      className: 'title'
    }, title), /*#__PURE__*/React.createElement("div", {
      className: 'react-code-input'
    }, values.map(function (value, index) {
      return /*#__PURE__*/React.createElement("input", {
        type: type === 'number' ? 'tel' : type,
        pattern: type === 'number' ? '[0-9]*' : undefined,
        autoFocus: autoFocus && index === autoFocusIndex,
        style: INPUT_STYLE,
        key: "".concat(_this.id, "-").concat(index),
        "data-id": index,
        value: value,
        id: _this.props.id ? "".concat(_this.props.id, "-").concat(index) : undefined,
        ref: _this.iRefs[index],
        onChange: _this.onChange,
        onKeyDown: _this.onKeyDown,
        // onKeyUp={this.onKeyUp}
        onFocus: _this.onFocus,
        disabled: _this.props.disabled,
        required: _this.props.required,
        placeholder: _this.props.placeholder ? _this.props.placeholder[index] : undefined
      });
    })), loading && /*#__PURE__*/React.createElement("div", {
      className: 'loading',
      style: LOADING_STYLE
    }, /*#__PURE__*/React.createElement("div", {
      className: 'blur'
    }), /*#__PURE__*/React.createElement("svg", {
      className: 'spin',
      viewBox: "0 0 1024 1024",
      "data-icon": "loading",
      width: "1em",
      height: "1em",
      fill: "currentColor",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#006fff",
      d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
    }))));
  };

  ReactCodeInput.defaultProps = {
    type: 'number',
    fields: 6,
    fieldWidth: 58,
    fieldHeight: 54,
    autoFocus: true,
    disabled: false,
    required: false,
    placeholder: []
  };
  return ReactCodeInput;
}(Component);

export { ReactCodeInput, ReactCodeInput as default };
//# sourceMappingURL=VerificationCode.js.map
