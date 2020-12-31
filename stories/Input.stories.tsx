import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Input from 'components/Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <Input {...args} />;

export const Default = Template.bind({});
