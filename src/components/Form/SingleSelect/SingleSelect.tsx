/**
 *
 * SingleSelect
 *
 */

import classnames from 'classnames';
import React from 'react';
import Select from 'react-select';
import { returnNull } from '../../../util';
import DropDown from '../../Icon/DropDown';
import Label from '../Label';
import style from './SingleSelect.scss';

type Option = { label: string; value: any };

type Props = {
  id: string;
  name: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  large?: boolean;
  error?: string;
  inline?: boolean;
  label?: string;
  placeholder?: string;
  options: Option[];
  value?: string | null | void;
  onChange: Function;
  onBeforeOpen: Function;
  onClose: Function;
  eventTypes?: string | Array<string>;
  preventDefault?: boolean;
  stopPropagation?: boolean;
  loadOptionsAsync?: Function;
  fill?: boolean;
  forceTitle?: string | void;
};

class SingleSelect extends React.Component<Props, any> {
  static defaultProps = {
    disabled: false,
    error: '',
    inline: false,
    value: null,
    onChange: returnNull,
    onBeforeOpen: () => true,
    onClose: () => true,
  };

  state = {
    expanded: false,
  };

  getDisplay = (option: Option) => {
    const { forceTitle } = this.props;

    return forceTitle || option.label;
  };

  handleChange = (data: Option | void) => {
    const oldValue = this.props.value;
    if (data && oldValue !== data.value) {
      const event = {
        value: data.value,
        props: this.props,
      };
      this.props.onChange(event);
    }
  };

  handleOpen = () => {
    this.props.onBeforeOpen();
    this.setState({ expanded: true });
  };

  handleClose = () => {
    this.setState({ expanded: false });
    this.props.onClose();
  };

  render() {
    const {
      id,
      name,
      className,
      required,
      large,
      disabled,
      error,
      inline,
      label,
      placeholder,
      onChange,
      value,
      options,
      eventTypes,
      preventDefault,
      stopPropagation,
      onBeforeOpen,
      onClose,
      forceTitle,
      fill,
      loadOptionsAsync,
      ...restProps
    } = this.props;
    const { handleOpen, handleClose, handleChange } = this;
    const { expanded } = this.state;
    return (
      <div
        className={classnames(className, style.outer, {
          [style.fill]: fill,
          [style.inline]: inline,
        })}
        {...restProps}
      >
        {label && (
          <Label className={style.label} htmlFor={id}>
            {label}
          </Label>
        )}
        <div className={classnames(className, style.relative)}>
          <div
            className={classnames(style.container, {
              [style.expanded]: expanded,
              [style.disabled]: disabled,
              [style.error]: error,
              [style.fill]: fill,
              [style.large]: large,
            })}
          >
            {loadOptionsAsync ? (
              <Select.Async
                joinValues
                className={classnames(style.select, {
                  [style.expanded]: expanded,
                  [style.disabled]: disabled,
                  [style.error]: error,
                  [style.forceTitle]: forceTitle,
                })}
                disabled={disabled}
                value={value}
                onChange={handleChange}
                onOpen={handleOpen}
                onClose={handleClose}
                placeholder={forceTitle || placeholder}
                valueRenderer={this.getDisplay}
                id={id}
                name={name}
                required={required}
                autoLoad={false}
                cache={false}
                loadOptions={loadOptionsAsync}
              />
            ) : (
              <Select
                joinValues
                options={options}
                className={classnames(style.select, {
                  [style.expanded]: expanded,
                  [style.disabled]: disabled,
                  [style.error]: error,
                  [style.forceTitle]: forceTitle,
                })}
                disabled={disabled}
                value={value}
                onChange={handleChange}
                onOpen={handleOpen}
                onClose={handleClose}
                placeholder={forceTitle || placeholder}
                valueRenderer={this.getDisplay}
                id={id}
                name={name}
                required={required}
              />
            )}
            <DropDown className={style.caret} />
          </div>
        </div>
      </div>
    );
  }
}

export { SingleSelect as InnerSingleSelect };

export default SingleSelect;