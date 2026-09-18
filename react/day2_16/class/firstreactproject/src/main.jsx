import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App,{Button} from './App.jsx' //this import of app
//this iss import 
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
    <Button/> 
  </StrictMode>,
)
//line 8 is compoent 
//compent 2 type export default,export name
//import we need this 2 import 
//exampe a iruthu b export panna
//a put export b put import
//so a irukadhu b vandhum

// <StrictMode>
 //   <button/> //we need to put B this is right small b only used in app tag mattu vera ella place B tha captial tha
 //   <App />
//  </StrictMode>,
//out 1st button varum kela app div ula vardhu 

//but app kela button pota vera mari varum
//named export irtuha line four 
//import App from './App.jsx'
//this normal 
//named export we to import there 
//import App,{Button} from './App.jsx' 
//and button tag poda kudhau cost BUtton captial tha podanum
//we create n no of export name and write n no import use , near button
//example
//import App,{Button,input,n of ........} from './App.jsx