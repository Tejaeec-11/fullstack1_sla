const Task3 = () => {

  const courses = ["HTML", "CSS", "JavaScript", "React", "Java"]

  return (
    <>
      <div className="bg-blue-400 p-10">
        <h1 className="text-3xl font-bold text-white mb-5">Available Courses</h1>
        <div className="flex flex-wrap gap-5">
          {courses.map((e, i) => (
            <div key={i} className="bg-white p-3 w-40 rounded-2xl">
              <h2>{e}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Task3
//heading is outside the map, so it shows only one time