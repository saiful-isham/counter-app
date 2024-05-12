import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './componets/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100'>
     
     <Counter/>
    </div>
  )
}

export default App
