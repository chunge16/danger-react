import React, {CSSProperties} from "react";
import classes from 'classnames';
import './index.css';

interface IconProps extends React.SVGAttributes<SVGElement>{
  /**
   * 图标名称
   */
  name: string;
  /**
   * 是否有旋转动画
   */
  spin?: boolean;
  /**
   * 图标旋转角度
   */
  rotate?: number;
  /**
   * 设置图标的样式，例如 fontSize 和 color,
   */
  style?: CSSProperties

  /**
   *  设置图标的样式名
   */
  className?: string

}

/**
 *  Icon图标
 *  真的好用
 */
export const Icon= (
    {
      name,
      rotate,
      spin=false,
      className='',
      style={},
      ...restProps
}: IconProps) => {
  let styleObj = rotate
      ? {
        ...style,
        transform: `rotate(${rotate}deg)`
      }
      : {
        ...style,
      };

  return (
      <span
          className={classes('action', {'icon-spin-animation': spin}, className)}
      >
          <svg className={'svg-icon'} style={styleObj} {...restProps}><use xlinkHref={`#${name}`}/></svg>
      </span>

  );
};


