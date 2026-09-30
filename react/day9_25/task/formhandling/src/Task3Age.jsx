import { useState } from "react"

const Task3Age = () => {

  const [age, setAge] = useState("")
  const [showAge, setShowAge] = useState("")
  const [error, setError] = useState("")

  const handleAgeChange = (e) => {
    setAge(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (age === "") {
      setError("Age is required")
      setShowAge("")
    } else {
      setError("")
      setShowAge(age)
      setAge("")
    }
  }

  return (
    <>
      <div className="p-5">
        <h2 className="text-xl font-bold mb-2">Task 3 - Age Validation</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="border px-3 py-2 rounded"
            type="number"
            value={age}
            onChange={handleAgeChange}
            placeholder="Enter the Age"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2"
          >
            Submit
          </button>
        </form>
        <p className="mt-2 text-red-500">{error}</p>
        <p className="mt-2">{showAge}</p>
      </div>
    </>
  )
}

export default Task3Age
// age === "" - checks whether the field is empty
// setAge("") - clears the input after successful submit