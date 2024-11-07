import { StoryFn, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { JSX } from 'react/jsx-runtime';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args: JSX.IntrinsicAttributes & ButtonProps) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  className: 'custom-class',
  children: 'Button with class',
};

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  onClick: () => alert('Button clicked!'),
  children: 'Button with onClick',
};
