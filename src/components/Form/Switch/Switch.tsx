/**
 *
 * Switch
 *
 */

import classnames from 'classnames';
import React from 'react';
import Icon from '../../Icon';
import style from './Switch.scss';
import { returnNull } from '../../../util';

type Props = {
  id: string;
  name: string;
  className?: string;
  disabled?: boolean;
  label?: string;
  value?: boolean;
  onChange: Function;
  checked?: boolean;
  error?: string;
};

class Switch extends React.Component<Props> {
  static defaultProps = {
    checked: false,
    disabled: false,
    error: '',
    onChange: returnNull,
  };

  handleClick = () => {
    if (this.props.disabled) {
      return;
    }
    const event = {
      value: !this.props.value,
      props: this.props,
    };
    this.props.onChange(event);
  };

  render() {
    const { handleClick } = this;
    const {
      id,
      className,
      disabled,
      label,
      value,
      onChange,
      ...restProps
    } = this.props;

    const outerClass = classnames(
      style.outer,
      {
        [style.disabled]: disabled,
      },
      className,
    );

    const switchClass = classnames(style.toggleSwitch, {
      [style.checked]: value,
    });

    return (
      <div className={outerClass} id={id} onClick={handleClick} {...restProps}>
        <div className={style.switchContainer}>
          <input type="checkbox" className={switchClass} />
          <span className={style.toggleSlider}>
            {value && (
              <span className={style.iconTickContainer}>
                <Icon name="Tick" className={style.iconTick} />
              </span>
            )}
          </span>
        </div>
        <span className={style.text}>{label}</span>
      </div>
    );
  }
}

export default Switch;
