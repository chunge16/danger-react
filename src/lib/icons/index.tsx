import React from "react";
import classes from 'classnames';
import './index.css';

interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {
    name,
    className='',
    ...restProps
  } = props;
  return (
      <svg
          className={classes('svg-icon', className)}
          {...restProps}
      >
        <use xlinkHref={`#${name}`}/>
      </svg>
  );
};

export default Icon;
