import React, { useEffect, useState } from 'react'
import { Calendar } from '../../Calendar'
import { Header } from '../../Header'
import { Mode } from '../../Mode'
import './style.css'



export function App() {

  const [nigthMode, setNigthMode] = useState<boolean>(false);
  const [colorBackground, setColorBackground] = useState<string>("white")

  const setMode = function (value: boolean) {
    setNigthMode(value);
  }

  useEffect(() => {
    nigthMode && setColorBackground("black")
    !nigthMode && setColorBackground("white")
  }, [nigthMode])

  return (
    <div className="App" style={{
      backgroundColor: colorBackground,
    }}>
      <Header />
      <Mode mode={setMode} />
      <Calendar />
    </div>
  )
}

