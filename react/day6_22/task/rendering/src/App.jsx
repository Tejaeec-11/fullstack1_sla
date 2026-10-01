import Employee from "./components/Employee"

const App = () => {

  // Task 1 - array
  const courses = ["HTML", "CSS", "JavaScript", "React", "Java"]

  // Task 2 - object
  const student = {
    name: "Tej",
    age: 20,
    course: "React",
    city: "Hyderabad",
  }

  // Task 3 - array of objects
  const products = [
    { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
    { id: 2, name: "Headphones", price: 1500, category: "Accessories" },
    { id: 3, name: "Backpack", price: 1200, category: "Fashion" },
    { id: 4, name: "Water Bottle", price: 350, category: "Home" },
  ]

  // Task 4 - object to send through props
  const employee = {
    name: "Ravi",
    role: "Frontend Developer",
    salary: 45000,
    city: "Dubai",
  }

  return (
    <>
      {/* Task 1 */}
      <div className="bg-blue-400 p-10">
        <h1 className="text-2xl font-bold text-white mb-5">Task 1 - Courses</h1>
        <div className="flex flex-wrap gap-5">
          {courses.map((e, i) => (
            <div key={i} className="bg-white p-3 w-40 rounded-2xl">
              <h2>{e}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Task 2 */}
      <div className="bg-green-400 p-10">
        <h1 className="text-2xl font-bold text-white mb-5">Task 2 - Student</h1>
        <div className="bg-white p-3 w-80 rounded-2xl">
          <p>{student.name}</p>
          <p>{student.age}</p>
          <p>{student.course}</p>
          <p>{student.city}</p>
        </div>
      </div>

      {/* Task 3 */}
      <div className="bg-yellow-400 p-10">
        <h1 className="text-2xl font-bold mb-5">Task 3 - Products</h1>
        <div className="flex flex-wrap gap-5">
          {products.map((e) => (
            <div key={e.id} className="bg-white p-3 w-60 rounded-2xl">
              <h2>{e.name}</h2>
              <p>{e.price}</p>
              <p>{e.category}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Task 4 */}
      <div>
        <Employee employeeData={employee} />
      </div>
    </>
  )
}

export default App
//Task 1 - array, so map() and key={i}
//Task 2 - object, so student.name (no map)
//Task 3 - array of objects, so map() and key={e.id}
//Task 4 - <Employee employeeData={employee} /> sends the full object as one prop