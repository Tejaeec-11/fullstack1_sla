import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import  Home from "./pages/Home";
import  About from "./pages/About";
import  Contect from "./pages/Contect";
import  Help from "./pages/Help";
import  Services from "./pages/Services";
import ServiceHelp from "./pages/ServiceHelp";

const App = () => {
  return (
  <>
  <Navbar/>
  
   <Routes>
    <Route path="/" element={<Home/>} />
     <Route path="/about" element={<About/>} />
      <Route path="/contact" element={< Contect/>} />
       <Route path="/help" element={<Help/>} />
        <Route path="/services" element={<Services/>} /> 
         <Route path="/ss" element={<ServiceHelp/>} /> 
  </Routes>
  </>
  )
}

export default App
//1
//add tailwindcss cmd in packet.json
//npm i tailwindcss @tailwindcss/vite

//2 
//add nav cmd in package .json
//npm i react-router-dom

//3
//npm create vite@latest navpage


//we add somthing 
//link 6 pota
//link 1 pota aganum

//try this 
//app.jsx iruka <navbar/> take and put in home page section mela pota
//about pogadhu about when we contact it move move contact page but nav is not show in that page
//app iruthA unverisal but when we take it from app pput in homepage it plain shiw home page contact


//line 16 to 21 we only put in app