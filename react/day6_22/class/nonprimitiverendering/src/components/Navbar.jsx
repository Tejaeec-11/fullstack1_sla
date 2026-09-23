

const Navbar = (props) => {

    console.log(props);//see in console
    
  return (
    <div className="bg-orange-500 p-10 h-100">
        <h1>NavBar</h1>
        <p>{props.datavaanupuren.name}</p>
    </div>
  )
}

export default Navbar
//two method props call
//destructor //3 we import 3 onu obj and string
//1.01.43/1.33;48