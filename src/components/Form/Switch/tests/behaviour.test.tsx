import { mount } from 'enzyme';
import React from 'react';
import Switch from '../Switch';

describe('Switch', () => {
  it('should invoke its  callback', () => {
    const onChange = jest.fn();
    const button = mount(
      <Switch id="test" name="test" onChange={onChange} label="Label" />,
    );

    button.find('.outer').simulate('click');

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should not invoke its callback for disabled', () => {
    const onChange = jest.fn();
    const button = mount(
      <Switch
        id="test"
        name="test"
        onChange={onChange}
        label="Label"
        disabled
      />,
    );

    button.find('.outer').simulate('click');

    expect(onChange).not.toHaveBeenCalledTimes(1);
  });
});
