import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import InputCurrency from 'components/InputCurrency';

export default {
  title: 'Components/InputCurrency',
  component: InputCurrency,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <InputCurrency
    lang={args.lang}
    currency={args.currency}
    value={args.value}
    onChange={args.onChange}
    noDecimal={args.noDecimal}
    {...args}
  />
);

export const Default = Template.bind({});

Default.args = {
  noDecimal: true,
  value: 12345.67,
  currency: 'BRL',
  lang: 'pt-BR',
  onChange: (value: number) => console.log('InputCurrency.onChange', value),
};
