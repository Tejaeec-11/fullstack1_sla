import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   <>
    <div className="bg-black text-white p-2 flex justify-around items-center">
      <div className="mx-5 bg-white p-2 text-center text-black w-30 rounded-2xl">Logo</div>
      <div className="flex gap-10 mx-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/help">Help</Link>
      </div>
    </div>
   
   </>
  )
}

export default Navbar

//if we use a tag page will refresh so we used link tag it change smothly
// a href tag 
//1 use in html
//2 use in refresh page only move to nexr page
//used in html
//we use href=""

//Link 
//1. use in react
//2. it does not refresh page
//3. only used in react
//we ue to=""
