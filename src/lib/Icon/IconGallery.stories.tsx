import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Icons from './icons';



export default  {
  title: 'Icons',

} as ComponentMeta<any>

export const ICONS = () => {
  return (
      <div>
        <h2>ICONS</h2>
        <Icons/>
      </div>
      )

}
