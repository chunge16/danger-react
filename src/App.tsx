import {forwardRef, useState, useEffect, useLayoutEffect, useImperativeHandle, useRef, Ref} from 'react'
import logo from './logo.svg'
import './App.css'
import Icon from './lib/icons';

function App() {

  return (
    <div className="App">
      <img style={{width: '50%'}} src={logo} alt={''}/>
      <Icon name={'iconauto'} className={'icon-color'} />
    </div>
  )
}



export default App
