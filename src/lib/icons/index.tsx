import React from "react";
import {cs} from '@/helpers/classes'
import styled, { keyframes, css } from 'styled-components';
import {IconProps, CustomIconComponentProps} from './interface';

const Icon = styled(IconComponent)`
  ${props => {
  return props.spin === true
      ? css`
            animation: ${spainAnimation} 1s linear infinite;
          `
      :undefined;
}}
`
const spainAnimation = keyframes`
 to { transform: rotate(360deg) }
`


function IconComponent(iconProps: IconProps) {
  const {
    className,
    type,
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

  svgProps.className = Array.isArray(className) ? cs(className) : className

  return (<svg {...svgProps}><use xlinkHref={`#${type}`}/></svg>)
}


Icon.defaultProps = {
  className: undefined,
  spin: false,
  type: undefined,
  style: undefined,
}



export default Icon;








