import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const [counter, setCounter] = useState(15)    // we can pass any value in the useState hook, it may be string, number, boolean , expression, or function too.
 
  // let counter = 5

let addValue = () => {
  // counter += 1;
  // if(counter < 20) setCounter(counter + 1);

  setCounter(prevCounter => prevCounter + 1);
  setCounter(prevCounter => prevCounter + 1);
  setCounter(prevCounter => prevCounter + 1);
  setCounter(prevCounter => prevCounter + 1);
  // console.log('Clicked',Math.random());
  }

  let subtractValue = () => {
    if(counter > 0) setCounter(counter - 1);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value{counter}</button>
      <br /> <br />
      <button onClick={subtractValue}>Subtract Value{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
