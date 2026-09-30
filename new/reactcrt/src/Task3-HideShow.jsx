import { useState } from "react"

const Task3-HideShow = () => {

  const [isActive, setIsActive] = useState(true)

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <div className="bg-blue-400 p-10">
        {isActive && <h2>This is React</h2>}
        <button onClick={handleToggle} className="bg-black text-white p-1 w-32 rounded-2xl">
          {isActive ? "Hide" : "Show"}
        </button>
      </div>
    </>
  )
}

export default App
// isActive - true / false
// !isActive - flips the value on every click



