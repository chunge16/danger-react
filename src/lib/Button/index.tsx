import React from 'react';
import styled, { css } from 'styled-components';

import { ButtonProps } from './interface'

/**
 * Primary UI component for user interaction
 */

function button(baseProps: ButtonProps){

  const {
    style,
    className,
    children,
    htmlType='button',
    type = 'default',
    status ='default',
    size='default',
    shape = "square",
    loading,
    onClick,
    disabled,
    ...rest
  } = baseProps;

  const handleClick: React.MouseEventHandler<HTMLElement> = (event: any): void => {
    if (loading) {
      typeof event?.preventDefault === 'function' && event.preventDefault();
      return;
    }
    onClick && onClick(event);
  };

  return (
      <button
          {...rest}
          className={className}
          type={htmlType}
          style={style}
          disabled={disabled}
          onClick={handleClick}
      >
        {children}
      </button>
  )
}

/** CSS IN JS**/
const baseButtonCss = css`
  display: inline-block;
  position: relative;
  outline: none;
  font-weight: 400;
  appearance: none;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all .1s linear;
  box-sizing: border-box;
  line-height: 1.5715;
`

const Button = styled(button)`
  ${baseButtonCss};
  font-size: ${props => {
    switch (props.size) {
      case 'mini': return 'var(--btn-size-mini-font-size)'
      case 'small': return "var(--btn-size-small-font-size)"
      case 'default': return 'var(--btn-size-default-font-size)'
      case 'large': return "var(--btn-size-large-font-size)";
      default: return 'var(--btn-size-default-font-size)'
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'mini': return 'var(--btn-size-mini-height)';
      case 'small': return  'var(--btn-size-small-height)';
      case 'default': return 'var(--btn-size-default-height)';
      case 'large': return 'var(--btn-size-large-height)';
      default: return 'var(--btn-size-default-height)';
    }
  }};
  padding: ${props => {
    switch (props.size){
      case 'mini': return 'var(--btn-size-mini-padding-horizontal)';
      case 'small': return 'var(--btn-size-small-padding-horizontal)';
      case 'default': return 'var(--btn-size-default-padding-horizontal)';
      case 'large': return 'var(--btn-size-large-padding-horizontal)';
      default: return 'var(--btn-size-default-padding-horizontal)';
    }
  }};
  border-radius: var(--btn-border-radius);
  cursor: ${(props) => props.disabled ? 'not-allowed': 'pointer'};
  ${props => {
    switch (props.type) {
      case 'primary': return css`
        background-color: ${() => {
          if (props.disabled){
            return 'var(--color-primary-light-3)'
          }else {
            return 'rgb(var(--primary-6))'
          }
        }};
        color: #fff;
        border: 1px solid transparent;
        &:hover {
          border-color: transparent;
          color: #fff;
          background-color: rgb(var(--primary-5));
        };
      `;
      case 'default':
      case 'secondary': return css`
        &:hover {
          border-color: transparent;
          color: var(--color-text-2);
          background-color: var(--color-secondary-hover);
        };
        background-color: ${() => {
          if (props.disabled){
            return 'var(--color-primary-light-3)'
          }else {
            return 'var(--color-secondary-disabled)'
          }
        }};
        color: ${() => {
          return props.disabled 
                  ? 'var(--color-text-4)'
                  : 'var(--color-text-2)'
        }};
        border: 1px solid transparent;
      `;
      case 'dashed': return css`
        &:hover {
          border-color: var(--color-neutral-4);
          color: var(--color-text-2);
          background-color: var(--color-fill-3)
        };
        background-color: ${() => {
          if (props.disabled){
            return 'var(--color-fill-2)'
          }else {
            return 'var(--color-secondary-disabled)'
          }
        }};
        color: ${() => {
          return props.disabled
                  ? 'var(--color-text-4)'
                  : 'var(--color-text-2)'
        }};
        border: 1px dashed var(--color-neutral-3);
      `;
      case 'outline': return css`
        &:hover {
          border-color: rgb(var(--primary-6));
          color: rgb(var(--primary-6));
          background-color: transparent;
        };
        background-color: transparent;
        color: ${() => {
          return props.disabled
                  ? 'var(--color-primary-light-3);'
                  : 'rgb(var(--primary-6))'
        }};
        border: ${() => {
          return props.disabled 
                  ? "1px solid var(--color-primary-light-3);"
                  : "1px solid rgb(var(--primary-6))";
        }};
      `;
      case 'text': return css`
        &:hover {
          border-color: transparent;
          color: rgb(var(--primary-6));
          background-color: var(--color-fill-2);
        };
        background-color: transparent;
        color: ${() => {
        return props.disabled
                ? 'var(--color-primary-light-3);'
                : 'rgb(var(--primary-6))'}};
        border: 1px solid transparent;
      `;
    }
  }};
  // shape
  ${props => {
    switch (props.shape) {
      case "square": return css`{
        border-radius: var(--btn-border-radius);
      }`;
      case "round": return css`{
        border-radius: 16px;
      }`;
      case "circle": return css`{
        width: var( --btn-size-default-height);
        height: var( --btn-size-default-height);
        text-align: center;
        padding: 0;
        border-radius: var(--border-radius-circle);
      }`;
      default: return css`{
        border-radius: var(--btn-border-radius);
      }`;
      
    }
  }};
  
`;

Button.defaultProps = {
  type: 'default',
  size: 'default',
  htmlType: 'button',
  shape: "square",
}

export default Button;





