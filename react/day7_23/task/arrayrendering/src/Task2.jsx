const Task2 = () => {

  const cities = ["Chennai", "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Kolkata"]

  return (
    <>
      <div className="bg-blue-400 p-10">
        {cities.map((e, i) => (
          <p key={i} className="bg-white p-3 mb-3 rounded-2xl">{e}</p>
        ))}
      </div>
    </>
  )
}

export default Task2
//<p> is a block element so every city comes one below another