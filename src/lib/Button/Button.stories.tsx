import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import theme from "../../theme/theme";

import Button from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
  args: {
    size: 'default',
    htmlType: 'button',
    theme: theme.light,
    children: 'Button',
  }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const BaseTypeTemplate: ComponentStory<typeof Button> = (args) => (
    <div>
      <Button {...args} type={"primary"}/>
      <Button {...args} type={"secondary"}/>
      <Button {...args} type={"dashed"}/>
      <Button {...args} type={"outline"}/>
      <Button {...args} type={"text"}/>
    </div>
)

const SizeTemplate: ComponentStory<typeof Button> = (args) => (
    <div>
      <Button {...args}  size={"mini"}>mini</Button>
      <Button {...args}  size={"small"}>small</Button>
      <Button {...args}  size={"default"}>default</Button>
      <Button {...args}  size={"large"}>large</Button>
    </div>
)

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  type: "primary",
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


/**
 * 按钮尺寸 size
 ***/

export const SizeButton = SizeTemplate.bind({});
SizeButton.args = {
  children: 'Button',
  type: "primary"
}



