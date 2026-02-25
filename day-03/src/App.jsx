// import React, { useEffect, useState } from 'react'



// const App = () => {
//   const [value , setValue] = useState(0)


//   const increaseValue = ()=>{
//     setValue(prev=>prev+1)
//   }

//    const decreaseValue = ()=>{
//     if(value<=0)
//     {
//       setValue(0)
//     }
//     else{
//       setValue(prev=>prev-1)
//     }

    
    
//   }

//   useEffect(()=>{
//     document.title = `${value}`;



//   },[value])
//   return (
//     <div>
//       <button onClick={increaseValue}>Increase</button>
//       <h4>{value}</h4>
//       <button onClick={decreaseValue}>Decrease</button>
//     </div>
//   )
// }

// export default App

import React, { useEffect } from 'react'
const users = {
  id: 1,
  name: "Rahul Sharma",
  age: 25,
  isAdmin: false,
  address: {
    city: "Mumbai",
    zip: "400001"
  },
  hobbies: ["cricket", "football"]
};



const App = () => {
  useEffect(()=>{
    console.log(Object.keys(users))
    console.log(Object.values(users))
    Object.entries(users).forEach(([key,val])=>{
      console.log(`key is ${key} and its value is ${val}`)
    })
    console.log(users?.address?.city)
  
},[])
  return (
    <>
    <div>App</div>

    {
       users?.hobbies?.map((index,val)=>
        <h1 key={val}>{index}</h1>
      )
    }
      </>
     
    



  )
}

export default App