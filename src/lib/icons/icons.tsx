import React from 'react';
import Icon from './index';
import dangerIconData from '@/assets/icons/danger-icon.json';

function Icons(){
  let {glyphs} = dangerIconData;
  if (!glyphs) return <div>数据错误</div>

  return (
      <div
          style={{
            display: 'flex',
            flexWrap: "wrap"
          }}
      >
        {
          glyphs.map(item => {
            return (
                <div
                    key={item.name}
                    style={{
                      width: '7.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      backgroundColor: '#fff',
                      color: 'black',
                      borderRadius: '4px',
                      marginRight: '8px',
                      marginBottom: '8px',
                      padding: '16px',
                      cursor: 'pointer',
                    }}
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
