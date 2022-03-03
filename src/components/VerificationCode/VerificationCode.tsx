/**
  code from https://github.com/suweya/react-verification-code-input
  @suweya by MIT
*/

import React, { Component } from 'react';

const KEY_CODE = {
  backspace: 8,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};

interface ReactCodeInputProps {
  type?: 'text' | 'number';
  onChange?: (val: string) => void;
  onComplete?: (val: string) => void;
  onFocus?: () => void;
  id?: string;
  fields?: number;
  loading?: boolean;
  title?: string;
  fieldWidth?: any;
  fieldHeight?: any;
  autoFocus?: boolean;
  className?: string;
  values?: string[];
  disabled?: boolean;
  required?: boolean;
  placeholder?: string[];
}

export class ReactCodeInput extends Component<ReactCodeInputProps, any> {
  static defaultProps = {
    type: 'number',
    fields: 6,
    fieldWidth: 58,
    fieldHeight: 54,
    autoFocus: true,
    disabled: false,
    required: false,
    placeholder: [],
  };

  iRefs: any[];
  id: number;

  constructor(props: ReactCodeInputProps) {
    super(props);
    const { fields, values } = props;
    let vals;
    let autoFocusIndex = 0;
    if (values && values.length && fields) {
      vals = [];
      for (let i = 0; i < fields; i++) {
        vals.push(values[i] || '');
      }
      autoFocusIndex = values.length >= fields ? 0 : values.length;
    } else {
      vals = Array(fields).fill('');
    }
    this.state = { values: vals, autoFocusIndex };

    this.iRefs = [];
    if (fields) {
      for (let i = 0; i < fields; i++) {
        this.iRefs.push(React.createRef());
      }
    }
    this.id = +new Date();

    // this.handleKeys = Array(fields).fill(false);
  }

  /**
   * Clear all field value & focus first field
   */
  __clearvalues__ = () => {
    const { fields } = this.props;
    this.setState({ values: Array(fields).fill('') });
    this.iRefs[0].current.focus();
  };

  triggerChange = (values = this.state.values) => {
    const { onChange, onComplete, fields } = this.props;
    const val = values.join('');
    onChange && onChange(val);
    if (onComplete && fields && val.length >= fields) {
      onComplete(val);
    }
  };

  triggerFocus = () => {
    const { onFocus } = this.props;
    onFocus && onFocus();
  };

  onChange = (e: any) => {
    const index = parseInt(e.target.dataset.id);
    if (this.props.type === 'number') {
      e.target.value = e.target.value.replace(/[^\d]/gi, '');
    }
    // this.handleKeys[index] = false;
    if (e.target.value === '' || (this.props.type === 'number' && !e.target.validity.valid)) {
      return;
    }
    const { fields } = this.props;
    let next;
    const value = e.target.value;
    let { values } = this.state;
    values = Object.assign([], values);
    if (value.length > 1 && fields) {
      let nextIndex = value.length + index - 1;
      if (nextIndex >= fields) {
        nextIndex = fields - 1;
      }
      next = this.iRefs[nextIndex];
      const split = value.split('');
      split.forEach((item: string, i: number) => {
        const cursor = index + i;
        if (cursor < fields) {
          values[cursor] = item;
        }
      });
      this.setState({ values });
    } else {
      next = this.iRefs[index + 1];
      values[index] = value;
      this.setState({ values });
    }

    if (next) {
      next.current.focus();
      next.current.select();
    }

    this.triggerChange(values);
  };

  onKeyDown = (e: any) => {
    const index = parseInt(e.target.dataset.id);
    const prevIndex = index - 1;
    const nextIndex = index + 1;
    const prev = this.iRefs[prevIndex];
    const next = this.iRefs[nextIndex];
    switch (e.keyCode) {
      case KEY_CODE.backspace:
        e.preventDefault();
        // @ts-ignore
        const vals = [...this.state.values];
        if (this.state.values[index]) {
          vals[index] = '';
          this.setState({ values: vals });
          this.triggerChange(vals);
        } else if (prev) {
          vals[prevIndex] = '';
          prev.current.focus();
          this.setState({ values: vals });
          this.triggerChange(vals);
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
      default:
        // this.handleKeys[index] = true;
        break;
    }
  };

  // onKeyUp = e => {
  //   const index = parseInt(e.target.dataset.id);
  //   if (this.handleKeys[index]) {
  //     this.handleKeys[index] = false;
  //     const next = this.iRefs[index + 1];
  //     if (next) {
  //       next.current.focus();
  //     }
  //   }
  // };

  onFocus = (e: any) => {
    e.target.select(e);
    this.triggerFocus();
  };

  render() {
    const { values, autoFocusIndex } = this.state;
    const {
      loading,
      title,
      fieldHeight,
      fieldWidth,
      fields,
      autoFocus,
      className,
      type,
    } = this.props;
    const INPUT_STYLE = {
      width: fieldWidth,
      height: fieldHeight,
    };
    const ROOT_STYLE = {
      width: fields! * fieldWidth,
    };
    const LOADING_STYLE = {
      lineHeight: `${fieldHeight}px`,
    };
    return (
      <div className={`react-code-input-container' ${className}`} style={ROOT_STYLE}>
        {title && <p className={'title'}>{title}</p>}
        <div className={'react-code-input'}>
          {values.map((value: string, index: number) => (
            <input
              type={type === 'number' ? 'tel' : type}
              pattern={type === 'number' ? '[0-9]*' : undefined}
              autoFocus={autoFocus && index === autoFocusIndex}
              style={INPUT_STYLE}
              key={`${this.id}-${index}`}
              data-id={index}
              value={value}
              id={this.props.id ? `${this.props.id}-${index}` : undefined}
              ref={this.iRefs[index]}
              onChange={this.onChange}
              onKeyDown={this.onKeyDown}
              // onKeyUp={this.onKeyUp}
              onFocus={this.onFocus}
              disabled={this.props.disabled}
              required={this.props.required}
              placeholder={this.props.placeholder ? this.props.placeholder[index] : undefined}
            />
          ))}
        </div>
        {loading && (
          <div className={'loading'} style={LOADING_STYLE}>
            <div className={'blur'} />
            <svg
              className={'spin'}
              viewBox="0 0 1024 1024"
              data-icon="loading"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill="#006fff"
                d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
              />
            </svg>
          </div>
        )}
      </div>
    );
  }
}

export default ReactCodeInput;
