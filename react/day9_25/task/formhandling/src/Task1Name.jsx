import { useState } from "react"

const Task1Name = () => {

  const [username, setUserName] = useState("")

  const handleNameChange = (e) => {
    setUserName(e.target.value)
  }

  return (
    <>
      <div className="p-5">
        <h2 className="text-xl font-bold mb-2">Task 1 - Name Input</h2>
        <input
          className="border px-3 py-2 rounded"
          type="text"
          value={username}
          onChange={handleNameChange}
          placeholder="Enter the Name"
        />
        <p className="mt-2">{username}</p>
      </div>
    </>
  )
}

export default Task1Name
// value={username} - input is controlled by state
// onChange - runs on every key press, e.target.value is the typed text