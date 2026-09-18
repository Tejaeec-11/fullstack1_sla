//add compent here then add in app avaolo tha work 
const NavBar = ()=>{
    return (<>
    
    <div className="navbar">
    <div>
        <Logo/>
    </div>
    <div className="link">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Help</a>
    </div>
    </div>

     
     </>)
}
export default NavBar

//what name is give in cosnt same name is give to export default we letter is same upper orlower caste no or anything but same
//same name give to when crete a file in componet 3 place same name 
//only tag is smallcases
//rule file name , const name export default name all 3 same exlame  Navbar wrong ,navBar wrong any one like this mean wrong so correct ways is NavBar in const , file, export default

//line 6,8 we add logo img in 7 line but this rule we named write uder code for thst 

export const Logo =()=>{
    return(<>
    <img className="imgs" src="./images/logo.jpg" width="100" alt="" />
    </>)
}
//line const Logo we give same in div ula Logo  
//27 line call in 7 line use same name
// n no time like crete const and call in div n no of times
//why this rule we change here it update in div so easy when ever we change
//img 2 method one is relative path and other is absolute path  
//style={} inside object write css and in html we write in style=""
//inline css vera in react proptires ver {{name vera }}


//css -not mostly used we need to , and ""
//1.ininle css add step
// <img src="./images/logo.jpg" width="100" style={{padding:"20px",borderRadius:"60px",marginLeft:"30px"}} alt="" />
//  <div style={{display:"flex",gap:"20px"}}>
//<div style={{background:"skyblue",padding:"10px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
//line 1,8,29 we can css this inline css

//extrenal css 
//2.give className: