import logo from './logo.svg'
import './App.css';
import {Button, Icon, Space} from "danger-react";
import "danger-react/dist/style.css";

function App() {

  return (
    <div className="App" style={{marginTop: '20px'}}>
        <Space>
            <Button type={"default"}>WPS</Button>
            <Button type={"primary"}>WPS</Button>
            <Button type={"dashed"}>WPS</Button>
          <Button type={"outline"}>WPS</Button>
        </Space>

        <div>
            <Icon type={'danger-icon-apps'}/>
        </div>

    </div>
  )
}

export default App
