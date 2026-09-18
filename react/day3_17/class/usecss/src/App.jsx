import Banner from "./components/Banner"
import NavBar from "./components/NavBar"

//start write code here java,css,html
const App = ()=>{
  return (<>
  <NavBar />
 <Banner/>
 
  </>)
}
export default App

//line 8 we put   <Banner/> here in app.jsxx or navbar kuda podlaa a tagkela in NavBar.jsx
//what is the diiferent wheather we add in app or navbar what different is there 

//method 1
//import App from './App.jsx' they put like this main 
//export default App          so app we write this 


//method 2 named mthod
// import {App} from './App.jsx' they put like this main
// export const App =              so app we write this 

//structure
//compent in src
//pages
//hooks
//utitiles

//line 7 mela 6 or kela 8 navbar add pannala but mela pota mela varum kela pota kela varum
//we need to add line 1 import and 6 for compent and export in NavBar
// if we add new file in compent in app we type this in 1 st line starting
//import NavBar from "./components/NavBar"
//vand we need to add 
//inside tag we need a file name put in retrun ula
//this both step complete panna tha output la varum we need to imort in app when ever crete new file