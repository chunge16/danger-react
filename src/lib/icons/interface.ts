import {SVGAttributes, CSSProperties} from 'react';

export interface IconProps extends Omit<SVGAttributes<SVGElement>, 'className'> {
  style?: CSSProperties;
  /**
   * 图标类型
   */
  type: string;
  /**
   * 是否旋转
   */
  spin?: boolean;
  // /**
  //  * 节点类名
  //  */
  className?: string | string[];
}


export interface CustomIconComponentProps {
  style?: CSSProperties;
  className?: string;
  width?: string | number;
  height?: string | number;
  fill?: string;
  viewBox?: string;
}
