import React, { useState } from 'react'

const App = () => {
const [value, setValue] = useState(0)

const increaseValue = () => {
  setValue((prev)=>prev+1)
}

const decreaseValue = () => {
  if(value<=0){
    setValue(0)
  }
  else{
    setValue((prev)=>prev-1)
  }



  
}


  return (
    <>
    <button onClick={increaseValue}>Increase</button>
    {value}
    <button onClick={decreaseValue}>Increase</button>
    </>
  )
}

export default App