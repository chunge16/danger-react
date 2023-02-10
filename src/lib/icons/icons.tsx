import React from 'react';
import Icon from './index';
import dangerIconData from '@/assets/icons/danger-icon.json';
import './index.css';

function Icons(){
  let {glyphs} = dangerIconData;
  if (!glyphs) return <div>数据错误</div>

  return (
      <div
          className='Icons-warp'
      >
        {
          glyphs.map(item => {
            return (
                <div
                    className="Icons-item"
                    key={item.name}
                >
                  <Icon type={`danger-icon-${item.name}`} />
                  <label htmlFor="id" style={{ marginTop: '8px' }}>
                    {item.name}
                  </label>
                </div>
            )
          })
        }
      </div>
  )
}


export default Icons
