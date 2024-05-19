import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5) 

  const addValue = () => {
    console.log("add value", Math.random());
    if (counter <= 0) {
      setCounter(1)
      return
    }
    if (counter >= 20) {
      setCounter(20)
      return
    }
    setCounter(counter + 1) 
  }

  const removeValue = () => {
    console.log("remove value", Math.random());
    if(counter <= 0){
      setCounter(0)
      return  
    }
    if (counter >= 20) {
      setCounter(19)
      return
    }
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter} </h2>

      <button onClick={addValue}>
          Add Value
      </button>
      <br />
      <button onClick={removeValue}>
          Remove Value
      </button>
    </>
  )
}

export default App
