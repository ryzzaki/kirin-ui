import React from 'react';
import { Meta } from '@storybook/react';
import Button from './Button';

// configuration
const config: Meta = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    primary: {
      name: 'primary',
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
    },
  },
};

// variants
export const Primary = () => <Button primary>A Button</Button>;
export const Secondary = () => (
  <Button primary transparent>
    A Button
  </Button>
);

export default config;
