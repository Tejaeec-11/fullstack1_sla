import { useState } from "react"

const Task2Email = () => {

  const [email, setEmail] = useState("")
  const [showEmail, setShowEmail] = useState("")

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowEmail(email)
  }

  return (
    <>
      <div className="p-5">
        <h2 className="text-xl font-bold mb-2">Task 2 - Email Submit</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="border px-3 py-2 rounded"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter the Email"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2"
          >
            Submit
          </button>
        </form>
        <p className="mt-2">{showEmail}</p>
      </div>
    </>
  )
}

export default Task2Email
// onSubmit is on <form>, not on the button
// e.preventDefault() stops the page from reloading
// showEmail changes only after submit, email changes while typing