import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ThemeProvider} from 'styled-components';
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

// 基本用法
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'primary',
  children: 'Button',
};
// BasicUsage
const BasicUsage = Template.bind({});
BasicUsage.args = {
  ...Template.args,
  children: 'Button',
}
export const BasicUsages = () => {
  console.log('BasicUsage', BasicUsage.args)
  return (
      <div>
        <div><Button {...BasicUsage.args} type={"primary"}/></div>
        <div><Button {...BasicUsage.args} type={"secondary"}/></div>
        <div><Button {...BasicUsage.args} type={"dashed"}/></div>
        <div><Button {...BasicUsage.args} type={"outline"}/></div>
        <div><Button {...BasicUsage.args} type={"text"}/></div>
      </div>
  )
}

// export const BasicUsage = (args) => {
//
//   return (
//       <div>
//         <div>
//           <Button {...args} type={"primary"}/>
//         </div>
//         <div>
//           <Button {...args} type={"secondary"}/>
//         </div>
//         <div>
//           <Button {...args} type={"dashed"}/>
//         </div>
//         <div>
//           <Button {...args} type={"outline"}/>
//         </div>
//         <div>
//           <Button {...args} type={"text"}/>
//         </div>
//       </div>
//   )
// }

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button',
};

export const ThemeBtn = Template.bind({});

ThemeBtn.decorators = [
  (a) => (
      <>
        <div>
          <Button>Button</Button>
          <br/>
          <ThemeProvider theme={theme.dark}>
            <Button>Button</Button>
          </ThemeProvider>
        </div>
      </>
  )
];
