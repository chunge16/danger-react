import {forwardRef, useState, useEffect, useLayoutEffect, useImperativeHandle, useRef, Ref} from 'react'
import logo from './logo.svg'
import './App.css'
import { Icon } from '@/lib';

function App() {

  return (
    <div className="App">
      <img className={'App-logo'} style={{width: '50%'}} src={logo} alt={''}/>
      <Icon name={'iconauto'} className={'icon-color'} style={{color: 'red'}} rotate={60} spin/>
    </div>
  )
}

export default App
