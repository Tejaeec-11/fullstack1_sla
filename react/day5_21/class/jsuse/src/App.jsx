import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ABout from "./pages/ABout";
const App = () => {
  return (
   <>
    <NavBar/>
    <Routes>
     <Route path="/" element={<Home/>}  />
        <Route path="/about" element={<ABout/>}  />
    </Routes>
   </>
  )
}

export default App



//<h1 className="bg-blue-600 text-white h-100 flex justify-center items-center">App</h1>
//to check wheather tailwindcss is work or not

//namba component ula evlo file venam creete pannala atlast app atha crete panna file name podanum <Navbar/>
//because app ula iruthakutha show agum output la