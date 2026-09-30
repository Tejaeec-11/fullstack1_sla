import { useState } from "react";

 const App = () => {
  const [title,setTitle] = useState("this is react")

  const [isActive,setIsActive] = useState(true)

  const changetext = ()=>{

    setTitle("this is node")
  }

  const SHowText =()=>{

    setIsActive(!isActive)
  } 
  return (
  
  <>
    <h3>{title}</h3>
    <button onClick={changetext}>click to change </button>

     {isActive&&<p>This is React</p>}
    <button onClick={SHowText}>{isActive?"Show":"Hide"}</button>
 
  </> 
 )
}

export default App

