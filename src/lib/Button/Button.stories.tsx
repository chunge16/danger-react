import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';
import Space from '../Space'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    ...Button.defaultProps,
    children: 'Button',
  }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const BaseTypeTemplate: ComponentStory<typeof Button> = (args) => (
    <Space>
      <Button {...args} type={"primary"}/>
      <Button {...args} type={"secondary"}/>
      <Button {...args} type={"dashed"}/>
      <Button {...args} type={"outline"}/>
      <Button {...args} type={"text"}/>
    </Space>
)

const SizeTemplate: ComponentStory<typeof Button> = (args) => (
    <Space>
      <Button {...args}  size={"mini"}>mini</Button>
      <Button {...args}  size={"small"}>small</Button>
      <Button {...args}  size={"default"}>default</Button>
      <Button {...args}  size={"large"}>large</Button>
    </Space>
)

const ShapeTemplate: ComponentStory<typeof Button> = (args => (
    <Space>
      <Button {...args}>+</Button>
      <Button {...args}  shape={'circle'}>+</Button>
      <Button {...args}  shape={"round"}>round</Button>
    </Space>
))


export const DefaultButton = Template.bind({});
DefaultButton.args = {
  type: "default",
  children: 'Button',
};

/**
 * 基本用法
 * */
export const BaseTypeButton = BaseTypeTemplate.bind({});
BaseTypeButton.args = {
  children: 'Button',
}

/**
 * 按钮形状
 * */
export const ShapeButton = ShapeTemplate.bind({});
ShapeButton.args = {
  type: "primary",
}


/**
 * 按钮尺寸 size
 ***/

export const SizeButton = SizeTemplate.bind({});
SizeButton.args = {
  children: 'Button',
  type: "default"
}



