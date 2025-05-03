import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center ">
    <h1 className="text-3xl font-bold text-red-500 underline text-center">Hello world!</h1>
    <h1>Hello Hafiza Arshad You have successfully setup react and tailwind CSS with vite</h1>
    </div>
  )
}

export default App
