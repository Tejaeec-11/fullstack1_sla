const App = () => {
  let studentsData = [
    { stuName: "1 tej", stuAge: 19, stuEmail: "tej@gmail.com", stuCourse: "css" },
    { stuName: "2 tej", stuAge: 20, stuEmail: "tej@gmail.com", stuCourse: "css" },
    { stuName: "3 tej", stuAge: 30, stuEmail: "tej@gmail.com", stuCourse: "css" },
    { stuName: "4 tej", stuAge: 26, stuEmail: "tej@gmail.com", stuCourse: "css" },
    { stuName: "5 tej", stuAge: 23, stuEmail: "tej@gmail.com", stuCourse: "css" },
    { stuName: "6 tej", stuAge: 27, stuEmail: "tej@gmail.com", stuCourse: "css" },
    { stuName: "7 tej", stuAge: 18, stuEmail: "tej@gmail.com", stuCourse: "css" },
    { stuName: "8 tej", stuAge: 25, stuEmail: "tej@gmail.com", stuCourse: "css" },
    { stuName: "9 tej", stuAge: 21, stuEmail: "tej@gmail.com", stuCourse: "css" },
  ];

  
  let copydata_1 = [...studentsData]
  
  
  let copydata = copydata_1.filter((e)=>e.stuAge>20)
   
  console.log(copydata);
  
  return (
    <>
      <div className="bg-blue-400 flex justify-between items-center flex-wrap gap-5 p-10">
        {copydata.map((e, i) => (
          <div key={i} className="bg-white p-3 w-100 h-50 rounded-2xl">
            <h2>{e.stuName}</h2>
            <p>{e.stuAge}</p>
            <p>{e.stuEmail}</p>
            <p>{e.stuCourse}</p>
             <button className="bg-black text-white p-1 w-60 text-center rounded-2xl">view course</button>
          </div>
        ))}
        </div>
      </>
  )
}

  export default App
//filter with age from whole data fwe fliter 


