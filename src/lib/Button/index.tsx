import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../theme/theme';

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
      case 'mini': return '12px'
      case 'small':
      case 'default':
      case 'large': return '14px';
      default: return '14px'
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'mini': return '24px'
      case 'small': return  '28px';
      case 'default': return '32px';
      case 'large': return '36px';
      default: return '32px'
    }
  }};
  padding: ${props => {
    switch (props.size){
      case 'mini': return '0 11px'
      case 'small':
      case 'default': return '0 15px';
      case 'large': return '0 19px';
      default: return '0 15px'
    }
  }};
  border-radius: var(--border-radius-small);
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
          color: ${props => props.theme.colors["color-text-2"]};
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
                  ? props.theme.colors["color-text-4"]
                  : props.theme.colors["color-text-2"]
        }};
        border: 1px solid transparent;
      `;
      case 'dashed': return css`
        &:hover {
          border-color: var(--color-neutral-4);
          color: ${props => props.theme.colors["color-text-2"]};
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
                  ? props.theme.colors["color-text-4"]
                  : props.theme.colors["color-text-2"]
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
  
`;

Button.defaultProps = {
  theme: theme.light,
  type: 'default',
  size: 'default',
  htmlType: 'button',
  shape: "square",
}

export default Button;





