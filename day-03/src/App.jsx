import React, { useEffect, useState } from 'react'



const App = () => {
  const [value , setValue] = useState(0)


  const increaseValue = ()=>{
    setValue(prev=>prev+1)
  }

   const decreaseValue = ()=>{
    if(value<=0)
    {
      setValue(0)
    }
    else{
      setValue(prev=>prev-1)
    }

    
    
  }

  useEffect(()=>{
    document.title = `${value}`;



  },[value])
  return (
    <div>
      <button onClick={increaseValue}>Increase</button>
      <h4>{value}</h4>
      <button onClick={decreaseValue}>Decrease</button>
    </div>
  )
}

export default App