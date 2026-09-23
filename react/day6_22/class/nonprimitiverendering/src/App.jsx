

const App = () => {
 
   const obj = {name:"vtv",node:"2016",isActive:"NewArray"}
    const arrobj = [
     {name:"react",node:"2016",isActive:"NewArray"},
     {name:"JS",node:"2020",isActive:"tere"},
     {name:"JSS",node:"2021",isActive:"rayya"},
     {name:"react",node:"2026",isActive:"ngst"}
  ]
  const newindiavalue = arrobj.map((e,i)=>`$(i)+1 -- $(e)`)
  console.log(newindiavalue);
  
  
 return (
   <>
   <div className="bg-blue-600 text-white flex gap-3  justify-center items-center p-3 h-screen">
    {arrobj.map((e,i)=>(
      <div className="bg-white text-black p-3 w-300 h-30" key={i} >
        <p>{e.name}</p>
         <p>{e.node}</p>
         <p>{e.isActive}</p>
      </div>
    ))}
   </div>

   <div>
   <Navbar datavaanupuren = {obj} newdatasend={"React"}/>
   </div>
  </>
  )
}

export default App
//props
//data same but props pass panna pora
//use obj in navbar we write code inisde attribute
//1
//{{obj,"react"}}
//or
//2
//  <Navbar datavaanupuren = {obj}/>

//3
// <Navbar datavaanupuren = {obj} newdatasend={"React"}/>
//one obj and onu string send to navbar 