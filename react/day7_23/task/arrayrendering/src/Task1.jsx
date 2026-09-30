

const Task1 = () => {
  const languages = ["JavaScript", "Python", "Java", "C++", "PHP"]
  return (
    <>
    <div className="bg-blue-400 flex justify-between items-center flex-wrap gap-5 p-10">

      {languages.map((e, i)=>(
        <div key={i} className="bg-white p-3 w-40 rounded-2xl" >
          <h2>{e}</h2>
        </div>
      ))}
    </div>
  </>
  )
}
export default Task1

//maap (e,i) - e is each language , i is the index
//key={i} is given to every item