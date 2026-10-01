const Employee = (props) => {

  console.log(props) //see in console

  const { employeeData } = props

  return (
    <div className="bg-orange-500 p-10">
      <h1 className="text-2xl font-bold mb-5">Task 4 - Employee</h1>
      <div className="bg-white p-3 w-80 rounded-2xl">
        <p>{employeeData.name}</p>
        <p>{employeeData.role}</p>
        <p>{employeeData.salary}</p>
        <p>{employeeData.city}</p>
      </div>
    </div>
  )
}

export default Employee
//props = { employeeData: {name, role, salary, city} }
//const { employeeData } = props is destructuring
//without destructuring you can write props.employeeData.name