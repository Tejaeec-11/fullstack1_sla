import { useState } from "react"

const Task1-counter = () => {

  const [countNumber, setCountNumber] = useState(0)

  const handleInc = () => {
    setCountNumber(countNumber + 1)
  }

  const handleDec = () => {
    setCountNumber(countNumber - 1)
  }

  const handleReset = () => {
    setCountNumber(0)
  }

  return (
    <>
      <div className="bg-blue-400 p-10">
        <h1>{countNumber}</h1>
        <button onClick={handleInc} className="bg-black text-white p-1 w-32 rounded-2xl">Increment</button>
        <button onClick={handleDec} className="bg-black text-white p-1 w-32 rounded-2xl">Decrement</button>
        <button onClick={handleReset} className="bg-black text-white p-1 w-32 rounded-2xl">Reset</button>
      </div>
    </>
  )
}

export default App
// countNumber - state value (initial 0)
// setCountNumber - state setter functio



