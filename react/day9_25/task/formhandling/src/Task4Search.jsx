import { useState } from "react"

const Task4Search = () => {

  const [search, setSearch] = useState("")

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div className="p-5">
        <h2 className="text-xl font-bold mb-2">Task 4 - Search Input</h2>
        <input
          className="border px-3 py-2 rounded"
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <p className="mt-2">You are searching for: {search}</p>
      </div>
    </>
  )
}

export default Task4Search
// state updates on every key press, so the text changes immediately