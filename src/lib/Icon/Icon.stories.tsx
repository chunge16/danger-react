import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from './index';
import Space from '../Space'

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {},
  args: {
    ...Icon.defaultProps
  },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args}/>;

const SpinTemplate: ComponentStory<typeof Icon> = (args) => (
    <Space>
      <Icon {...args} type={'danger-icon-apps'}/>
      <Icon {...args} type={'danger-icon-sync'}/>
      <Icon {...args} type={'danger-icon-close'}/>
    </Space>
);


// Default
export const Default = Template.bind({});
Default.args = {
  type: 'danger-icon-apps',
  style: {
    fontSize: '30px'
  }
}

/**************************/

// spin
export const Spin = SpinTemplate.bind({});
Spin.args = {
  spin: true,
  style: {
    fontSize: '30px'
  }
}








