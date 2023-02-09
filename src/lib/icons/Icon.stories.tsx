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
import { expect, jest} from '@storybook/jest';
import {userEvent, within} from "@storybook/testing-library";

import { Icon } from './index';
import Space from '../Space'

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

let fn = jest.fn(() => true)
const Template: ComponentStory<typeof Icon> = (args) => <Icon onClick={() => fn()} data-testid={'icon'} style={{fontSize: '24px'}} {...args}/>;


// Primary
export const Default = Template.bind({});

Default.decorators = [
  () => (
      <Space>
        <Icon name={'danger-icon-apps'}/>
        <Icon name={'danger-icon-apps'}/>
        <Icon name={'danger-icon-apps'}/>
      </Space>
  )
];

/**************************/

/**
 * test Name
 */
export const Name = Template.bind({});
Name.args = {
  name: 'danger-icon-apps'
}

Name.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);

  const icon = await canvas.getByTestId('icon')

  if (!!icon) {
    await userEvent.click(icon);

    expect(fn).toHaveReturned();
  }

}

// spin
export const Spin = Template.bind({});
Spin.args = {
  name: 'danger-icon-minus-circle-fill',
  spin: true
}

// rotate
export const Rotate = Template.bind({});
Rotate.args = {
  name: 'danger-icon-minus-circle-fill',
  rotate: 90
}





