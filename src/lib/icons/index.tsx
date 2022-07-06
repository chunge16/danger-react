import React from "react";
import classes from 'classnames';

import './index.css';

interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string;
  spin?: boolean;
  rotate?: number;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {
    name,
    className='',
    rotate,
    spin=false,
    style={},
    ...restProps
  } = props;

  let styleObj;
  if (rotate){
    styleObj = {
      ...style,
      transform: `rotate(${rotate || 0}deg)`
    }
  }
  return (
      <span
          className={classes('action', {'icon-spin-animation': spin}, className)}
      >
          <svg className={'svg-icon'} style={styleObj} {...restProps}><use xlinkHref={`#${name}`}/></svg>
      </span>

  );
};

export default Icon;
