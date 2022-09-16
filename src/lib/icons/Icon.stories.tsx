import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import '../../../src/assets/iconfont/iconfont';

import { Icon } from './index';

export default {
  title: 'Components/Icon',
  component: Icon,

} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon style={{fontSize: '24px'}} {...args}/>;


// Primary
export const Primary = Template.bind({});

Primary.decorators = [
  () => (
      <>
        <span style={{marginRight: '15px'}}>
          <Icon name={'iconauto'}/>
        </span>
        <span style={{marginRight: '15px'}}>
          <Icon name={'iconloading'}/>
        </span>
        <span>
          <Icon name={'iconcart-full'}/>
        </span>
      </>
  )
]


Primary.storyName = 'I am the primary';

/**************************/

// Name
export const Name = Template.bind({});
Name.args = {
  name: 'iconauto'
}

// spin
export const Spin = Template.bind({});
Spin.args = {
  name: 'iconloading',
  spin: true
}

// rotate
export const Rotate = Template.bind({});
Rotate.args = {
  name: 'iconauto',
  rotate: 90
}




