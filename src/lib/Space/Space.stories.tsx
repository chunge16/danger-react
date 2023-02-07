import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Space from './index';
import Button from "../Button";

export default {
  title: 'Components/Space',
  component: Space,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    ...Space.defaultProps,
  }
} as ComponentMeta<typeof Space>;

const Template: ComponentStory<typeof Space> = (args) => {
  return (
      <Space {...args} style={{height: '100px', width: '200px'}}>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
      </Space>
  )
};

const WrapTemplate: ComponentStory<typeof Space> = (args) => {
  return (
      <Space {...args} style={{width: '400px'}}>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
      </Space>
  )
};


export const DefaultSpace = Template.bind({});

export const WrapSpace = WrapTemplate.bind({});
WrapSpace.args = {
  wrap: true,
}






