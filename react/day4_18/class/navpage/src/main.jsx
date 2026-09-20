import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </StrictMode>,
)
//whenm you add 8 ,10 link we nned to add 5 line 
//link we need to active means we nned to add BrowserrOUTER and link 5 import


//last end try this both method we use one is already code and output but another is down code two mentod total
//but already code method is ****dont try this method jsu tknow 
//line  8,10 and 5 we remove from there main.jsx then we put that in 
//app.jsx like this 
//<BrowserRouter>
//<Navbar/>
//<Routes>
   // <Route path="/" element={<Home/>} />
   //  <Route path="/about" element={<About/>} />
   //   <Route path="/contact" element={< Contect/>} />
   //    <Route path="/help" element={<Help/>} />
   //     <Route path="/services" element={<Services/>} /> 
//<Route path="/ss" element={<ServiceHelp/>} /> 
 // </Routes>
  // </BrowserRouter>
 //like this also we can put




 //final end at last rendering we only give that in home.jsx where everything give retrun mela tha 
 //but htl we give in kela 
 //but js we give in mela retrun mela 