import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "sundram",
    age: 21
  }
  
  let newArr = [1, 2, 3]
  return (
    <>
        <h1 className='bg-black text-white p-4 rounded-xl mb-4'>Tailwind CSS Test</h1>
      {/* <Card channel="chaiaurcode" sameObj={newArr}/> */}
      <Card username="chaiaurcode" btnText = "click me" />
      <Card username="Sundram" />
   </>
  )
}

export default App
