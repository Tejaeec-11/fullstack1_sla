const Navbar = (props) => {

    console.log(props);//see in console
   
  const {datavaanupuren,newdatasend} =  props
    
  return (
    <div className="bg-orange-500 p-10 h-100">
        <h1>NavBar</h1>
        <p>{props.datavaanupuren.name}</p>
        <h2>{props.newdatasend}</h2>
    </div>
  )
}

export default Navbar
//two method props call
//destructor //3 we import 3 onu obj and string
// const {datavaanupuren,newdatasend} =  props this iiis  dectrocturstion 
//datavaanupuren thiscall it from app.jsx
//    <p>{props.datavaanupuren.name}</p>56 display vtv
//display   <h2>{props.newdatasend}</h2> //react dispaly 