import { Link } from "react-router-dom";
import logo from "../assets/vite.svg";
const NavBar = () => {
  return (
  <>
    <div className="bg-black text-white p-2 flex justify-around items-center">
        <div>
           <img src={logo} className="w-15"/> 
        </div>
        <div className="flex gap-20">
          <Link to={"/"}>Home</Link> 
           <Link to={"/about"}>About</Link>   
        </div>
    </div>
    </>
  )
}

export default NavBar