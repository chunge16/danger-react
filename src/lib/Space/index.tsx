import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import {SpaceProps, SpaceSize} from './interface';
import  {cs} from '@/helpers/classes';

const Space = styled(SpaceComponent)`
  display: inline-flex;
  flex-direction: ${props => props.direction === 'vertical' ? 'column':'row'};
  flex-wrap: ${props => props.wrap === true ? 'wrap':'nowrap'};
  ${props => {
    const innerAlign = props.align || (props.direction === 'horizontal' ? 'center' : '');
    return css`
      align-items: ${() => innerAlign};
    `
  }};
`;
const SpaceItem = styled.div<SpaceProps>`
  margin-right: ${props => {
    let {size} = props;
    if (!size) return 'var(--size-2)';
    if (Array.isArray(size)){
      return getSpaceSizeValue(size[0]);
    }else {
      return getSpaceSizeValue(size);
    }
    
  }};
  margin-bottom: ${props => {
    let {size} = props;
    if (!size) return 'var(--size-2)';
    if (Array.isArray(size)){
      return getSpaceSizeValue(size[1]);
    }else {
      return getSpaceSizeValue(size);
    }
    
  }};
  
`;
function SpaceComponent(spaceProps: SpaceProps) {
  const {
    size,
    style,
    children,
    className,
    direction
  } = spaceProps;

  if (!children) return null;

  let classNameStr = Array.isArray(className) ? cs(className): className;

  let childrenList = React.Children.toArray(children);

  return (
      <div
          style={style}
          className={classNameStr}
      >
        {
          childrenList.map((item, index) => {

            return (
                <Fragment key={index}>
                  <SpaceItem direction={direction} size={size} children={item}/>
                </Fragment>
            )
          })
        }
      </div>

  )
}

function getSpaceSizeValue(size: SpaceSize){
  if (typeof size === 'number') return `${size}px`;
  switch (size) {
    case "mini": return 'var(--size-1)';
    case "small": return 'var(--size-2)';
    case "medium": return 'var(--size-4)';
    case "large": return 'var(--size-6)'
    default: return 'var(--size-2)';
  }
}


Space.defaultProps = {
  direction: 'horizontal',
  size: "small",
  align: "center",
}

export default Space;


