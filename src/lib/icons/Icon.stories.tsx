import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';

import { Icon } from './index';

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    docs: {
      page: () => (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <ArgsTable story={PRIMARY_STORY} />
            <Stories />
          </>
      ),
    },
  },

} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon style={{fontSize: '24px'}} {...args}/>;


// Primary
export const Default = Template.bind({});

Default.decorators = [
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


Default.storyName = 'I am the primary';

Default.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  },
};

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




