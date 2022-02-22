
import { useState } from 'react'
import ReactQr from 'react-awesome-qr'
import './App.css'

function Input({settings}){
  return (
    <div>
    <input 
      type={settings.type}
      name={settings.name} 
      value={settings.value}
      onChange={settings.onChange}
    />
    {settings.value}
    </div>
    )
}

function QRCode(){
  const [input, setInput] = useState('undefined')
  const [range, setRange] = useState(5)
  const [size, setSize] = useState(300)
  const [logo, setLogo] = useState('')
  const settings = {
    type: 'radio',
    name: 'logo',
    onChange: 
      e => {
        setLogo(e.target.value)
    } 
  }
  const cola = {
    ...settings,
    value: 'cola'
  }
  const google = {
    ...settings,
    value: 'google'
  }
  const edc = {
    ...settings,
    value: 'edc'
  }
  const coop = {
    ...settings,
    value: 'coop'
  }
  return (
    <div>
      <Input settings={cola} />
      <Input settings={edc} />
      <Input settings={coop} />
      <Input settings={google} />
      {'qr-text: '}
      <input
        onChange={
          e => {
            if (e.target.value === '') {
              setInput('undefined')
            } else {
              setInput(e.target.value)
            }
          }
        } />

      <br />
      {'dot-size: '}
      <input
        type='range'
        min={5}
        max={10}
        onChange={
          e => {
            setRange(e.target.value)
          }
        } />
      {range}
      <br />
      {'size: '}
      <input
        type='range'
        min={200}
        step={100}
        max={500}
        onChange={
          e => {
            setSize(e.target.value)
          }
        } />
      {size}
      <br />
      <ReactQr
        text={input}
        bgSrc={'./' + logo + '.png'}
        size={size}
        backgroundColor='#000'
        dotScale={range / 10}
        colorLight='#fff'
      />
    </div>
  )
}

function App() {
  return (
    <div>
      <QRCode />
    </div>
  );
}

export default App;
