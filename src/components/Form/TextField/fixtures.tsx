// @flow
import React, { Fragment } from 'react';
import TextField from '.';

export default [
  {
    name: 'Default',
    formWrapper: { value: '' },
    component: TextField,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'First Name',
    },
  },

  {
    name: 'small',
    formWrapper: { value: '' },
    component: TextField,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'First Name',
      small: true,
    },
  },

  {
    name: 'smallNoLabel',
    formWrapper: { value: '' },
    component: TextField,
    props: {
      id: 'demo',
      name: 'demo',
      small: true,
    },
  },

  {
    name: 'password',
    formWrapper: { value: '' },
    component: TextField,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'Password',
      password: true,
    },
  },

  {
    name: 'noLabel',
    formWrapper: { value: '' },
    component: TextField,
    props: {
      id: 'demo',
      name: 'demo',
    },
  },

  {
    name: 'Disabled',
    component: TextField,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'First Name',
      disabled: true,
    },
  },

  {
    name: 'Error',
    component: TextField,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'First Name',
      error: "Something isn't right",
      isValid: false,
    },
  },

  {
    name: 'InvalidMarker',
    component: TextField,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'First Name',
      error: "Something isn't right",
      marker: 'tick-cross',
      value: 'Bruce',
      isValid: false,
    },
  },

  {
    name: 'ValidMarker',
    component: TextField,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'First Name',
      marker: 'tick-cross',
      value: 'Bruce',
    },
  },

  {
    name: 'Value',
    component: TextField,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'First Name',
      value: 'Oscar',
    },
  },

  {
    name: 'Info tooltip',
    component: TextField,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'First Name',
      marker: 'info',
      markerTooltip: <div>Test HTML</div>,
    },
  },

  {
    name: 'Verified status',
    component: TextField,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'Mobile',
      marker: 'verify',
    },
  },

  {
    name: 'UnVerified status',
    component: TextField,
    props: {
      id: 'demo',
      name: 'demo',
      label: 'Mobile',
      marker: 'verify',
      isVerified: false,
      markerTooltip: (
        <Fragment>
          <h3>Sample Popup</h3>
          <p>Sample content</p>
        </Fragment>
      ),
    },
  },

  {
    name: 'Autocomplete off',
    component: TextField,
    props: {
      id: 'firstname',
      name: 'firstname',
      label: 'First Name',
      autoComplete: 'off',
    },
  },
];
