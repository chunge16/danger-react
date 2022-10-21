import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}


/**
 * Primary UI component for user interaction
 */
const button = (
    {
      primary = false,
      size = 'medium',
      backgroundColor,
      label,
      ...props
    }: ButtonProps) => {
  return (
      <button
          type="button"
          style={{ backgroundColor }}
          {...props}
      >
        {label}
      </button>
  );
};

export const Button = styled(button)`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: ${props => props.primary ? '#fff':'#333'};
  background-color: ${props => props.primary ? '#1ea7fd':'transparent'};
  box-shadow: ${props => props.primary ? 'initial':'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'};
  font-size: ${props => {
    switch (props.size) {
      case 'small': return  '12px';
      case 'medium': return '14px';
      case 'large': return '16px';
      default: return '14px'
    }
  }};
  padding: ${props => {
    switch (props.size){
      case 'small': return  '10px 16px';
      case 'medium': return '11px 20px';
      case 'large': return '12px 24px';
      default: return '11px 20px'
    }
  }};
`;
