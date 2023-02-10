import React from "react";
import {cs} from '@/helpers/classes';
import classnames from 'classnames';
import {IconProps, CustomIconComponentProps} from './interface';
import './index.css';

function Icon(iconProps: IconProps) {
  const {
    className,
    type,
      spin,
    ...rest
  } = iconProps;
  const defaultProps = {
    width: '1em',
    height: '1em',
    fill: 'currentColor',
  };

  const svgProps: CustomIconComponentProps = {
    ...defaultProps,
    ...rest,
  };

  let classNames = Array.isArray(className) ? cs(className) : className;

  if (spin === true) {
    classNames = classnames(classNames, {'spin-animation': spin})
  }

  return (<svg {...svgProps} className={classNames}><use xlinkHref={`#${type}`}/></svg>)
}


Icon.defaultProps = {
  className: undefined,
  spin: undefined,
  type: undefined,
  style: undefined,
}



export default Icon;








