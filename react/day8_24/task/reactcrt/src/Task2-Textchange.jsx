import { useState } from "react"

const Task2-Textchange = () => {

  const [title, setTitle] = useState("Hello React")

  const changeText = () => {
    setTitle("Welcome to React")
  }

  return (
    <>
      <div className="bg-blue-400 p-10">
        <h1>{title}</h1>
        <button onClick={changeText} className="bg-black text-white p-1 w-32 rounded-2xl">Change Text</button>
      </div>
    </>
  )
}

export default App
// title - state value, setTitle - setter function



