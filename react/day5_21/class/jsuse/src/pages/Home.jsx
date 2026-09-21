const Home = () => {
 //rendering primtive now 
 const stringData = "stalin Is THE CM"//this is daynmice process what we give inside string it change from outside in p tage if we stalin instead of vijay it change into stalin in whole paragrahy
 const numberData =  2020

 const isActive   = true //if we put false in datacheck not running come if you true it come output trunning
 const Isnull     = 1000000 // null //if not null there value 1000or "vALUE IRUTHA"//?? this is nullishcolloshing
 let datas        =  undefined //tute,tuur,thirs-idu falsebecaseu no stringbut true or any string insdie strign insdie srring is true //98 //or Isnull give datas give it show output based on it//all these primtive data type
//1.is active
 //isActive?"running":"Not Running"/this statement now need to change it into expression 
// const datasCheck = isActive?"running":"Not Running" //under p kela pota this method one <h2>{datasCheck}<h2/>//1 method we can there 2nd method we put whole in p tag,expresion potu podanum another method direct expression illa podalam  in direct h2 ula 

  return (
    <>
    <div className="bg-blue-400 text-white p-10 h-100">
        Home
        <p>Lorem ipsum, dolor <span className="bg-amber-300">{stringData},{numberData}</span>  sit amet consectetur adipisicing elit. Nulla ullam voluptatem incidunt, consectetur velit sed.
             Sapiente nulla dolor smagnam explicabo accusamus <span className="bg-amber-300">{stringData}</span>placeat, numquam necessitatibus, fugit error dolore ipsa quos harum!
             ipsum dolor, sit amet consectetur {numberData} adipisicing elit. Blanditiis cumque, laudantium accusantium eligendi, sequi odio rerum,
              id laboriosam aspernatur provident
              molestias beatae recusandae modi <span className="bg-amber-300">{stringData},{numberData}</span>facere eaque culpa dolorum esse numquam.
             Lorem ipsum dolor, sit <span className="bg-amber-300">{stringData}</span>amet consectetur adipisicing elit. Laboriosam possimus veniam similique. Aliquid eligendi in excepturi 
             dolorum blanditiis ullam eius.</p>
             <span>---------------------rerding output</span>
             <h2>
             {isActive?"running":"Not Running"} -----------this is second method with out expression direct aa or ellse ne 1 method mari call pannla datascheck object barket ula podalam
             </h2>
             <span>-------------------------------------------------</span>
             <h2>{isActive}</h2>
             {
                isActive?<p>This is true</p>:<p>This is False-----------</p>
             }
             <span>------------------------------------------</span>
             { 
             Isnull??<p>This is the Js Data process & Rendering</p>
             }
             <span>----------------------------</span>
             {
                datas && <p>I am true</p>
             }
             {
                !datas?"true":"false"
             }
    
    </div>
    </>
  )
}

export default Home

//1
//take nav from app.jsx
//<NavBar/>
//then put in <><Home/><div>svhsinvhj</div><>
//epdi pota only home page tha navbar kathum but app.jsx pota home and about page um kathum
//about click panna nav bar kathadhu
//constume kuda pannala


//2
//render method 
//if use js we need put in html elemt we need to put {}object barket 
//inside it we need to add varaiable


//3 
//isActive 2 method 
//1.expression,second direct aa
//this is true or  flase if true measn soru vlalue if we change false another value 

//4
//Isnull
//when the left value null undefined apdi na rigth iruka value kathum
//is null is left side and rendering right sid evalue
//left side irukathu null or undefined irukanum
//right side this js data process rendering iruku
//contion left irukathu null o or un defined aa irukanum aa


//5
//&& this optional rendering they called

//6
//!datas? this is not operator
//true eman strue false mean sfalse if usenot opeator
//!datas?


//recap
//primitive rendering sting ,no,boolean,undefined ,null
//null,undefined -this is nulliscolling
//true or false tertinary operator optioanl rendering not operatoer
//logical rendering  and and not 
//?teritary
//?? nulliscolling-null or undefinned
//&& optioanl rendering -logocal rendering
//condition tertiory 