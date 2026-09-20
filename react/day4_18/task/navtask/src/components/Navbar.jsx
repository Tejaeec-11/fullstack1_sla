import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = ({ isActive }) =>
    isActive ? "text-yellow-400 font-bold" : "text-white"

  return (
    <div className="bg-black text-white p-2 flex justify-around items-center">
      <div className="mx-5 bg-white p-2 text-center text-black w-30 rounded-2xl">Logo</div>
      <div className="flex gap-6 mx-5">
        <NavLink to="/" className={linkStyle} end>Home</NavLink>
        <NavLink to="/about" className={linkStyle}>About</NavLink>
        <NavLink to="/services" className={linkStyle}>Services</NavLink>
        <NavLink to="/courses" className={linkStyle}>Courses</NavLink>
        <NavLink to="/gallery" className={linkStyle}>Gallery</NavLink>
        <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
        <NavLink to="/help" className={linkStyle}>Help</NavLink>
      </div>
    </div>
  )
}
export default Navbar