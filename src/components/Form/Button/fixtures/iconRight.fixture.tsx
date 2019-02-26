import React from 'react';
import Button from '../';
import { IconArrowRight } from '../../../Icon';

export default {
  component: Button,
  props: {
    iconRight: <IconArrowRight />,
  },
  children: 'Button',
  simulateSubmission: true,
};
