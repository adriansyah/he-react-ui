// @flow

/**
 *
 * ActionSet
 *
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import onClickOutside from 'react-onclickoutside';
import Icon from '../../Icon';
import style from './ActionSet.scss';

class ActionSet extends React.Component<*, *> {
  static propTypes = {
    children: PropTypes.any.isRequired,
    expanded: PropTypes.bool,
    className: PropTypes.string,
    eventTypes: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    outsideClickIgnoreClass: PropTypes.string,
    preventDefault: PropTypes.bool,
    stopPropagation: PropTypes.bool,
    disableOnClickOutside: PropTypes.func,
    enableOnClickOutside: PropTypes.func,
  };

  static defaultProps = {
    className: '',
    expanded: false,
  };

  state = {
    open: false,
  };

  close = () => {
    this.setState({ open: false });
  };

  open = () => {
    this.setState({ open: true });
  };

  handleClickOutside = () => {
    this.close();
  };

  render() {
    const {
      children,
      className,
      expanded,
      eventTypes,
      outsideClickIgnoreClass,
      preventDefault,
      stopPropagation,
      disableOnClickOutside,
      enableOnClickOutside,
      ...rest
    } = this.props;
    const { open } = this.state;
    const expandable = children.length > 2 && !expanded;
    const classes = classnames(style.outer, {
      [style.expandable]: expandable,
      [style.open]: open,
      [className]: className,
    });

    return (
      <div
        className={classes}
        onMouseEnter={this.open}
        onMouseLeave={this.close}
        {...rest}
      >
        {expandable && (
          <Icon
            className={style.ellipsis}
            name="Ellipsis"
            width={36}
            height={36}
            onClick={this.open}
          />
        )}
        <div className={style.actions}>
          {React.Children.map(children, (child, i) => (
            <div key={i} className={style.action} onClick={this.close}>
              {child}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default onClickOutside(ActionSet);
