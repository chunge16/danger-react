import React, {CSSProperties} from "react";
import './index.css';

interface IconProps {
  name: string;
  style?: CSSProperties
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {
    name,
    style={}
  } = props;

  return (
      <span>
        <svg className='svg-icon' style={style}>
          <use xlinkHref={`#${name}`}/>
        </svg>
    </span>
  );
};

export default Icon;
