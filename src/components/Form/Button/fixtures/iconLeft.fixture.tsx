import React from 'react';
import Button from '../';
import { IconSettings } from '../../../Icon';

export default {
  component: Button,
  props: {
    iconLeft: <IconSettings />,
  },
  children: 'Button',
  simulateSubmission: true,
};
