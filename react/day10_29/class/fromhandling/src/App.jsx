const App = (e) => {
     
  const [saveDatas,setSaveDatas] = useState({username:"",usernumber:"",useremail:""})//orey object 
     


    const handleChange =(e)=>{
    
    
      
       setSaveDatas({...saveDatas,[e.target.name]:e.target.value})
       
       const [showDatas, setShowDatas] = useState([]) 
       const fetchData = ()=>{
         const getDatas = JSON.parse(localStorage.getItem("datas"))
      
         setShowDatas(getDatas)
      
      
        }
        useEffect(()=>{
          fetchDatas()
        },[])
       



    }
    const handleClick = (e) =>{
  
       e.preventDefault()
     
       if(saveDatas.username === "" ||  saveDatas.usernumber === ""  || saveDatas.useremail === "" )
        alert("Fill the Form")
       return
      
   
     let datas = [...showDatas]

      datas.push(saveDatas )

     setShowDatas(datas)
      alert("successfully done")

      setSaveDatas({username:"",usernumber:"",useremail:""})
   
   
       fetchDatas()
      }





  return (
    <>
    <form>
      <input type="text" name="username" value={saveDatas.username} onChange={handleChange}/>
      <input type="number"  name="usernumber" value={saveDatas.usernumber} onChange={handleChange}/>
      <input type="email"  name="useremail" value={saveDatas.useremail} onChange={handleChange}/>
      <button onclick={handleClick}></button>
    </form>

    <div>
      {showDatas.map((e,i)=>{
        <div key={i}>
          <p>{e.username}</p>
          <p>{e.usernumber}</p>
          <p>{e.useremail}</p>
        </div>
      })}
    </div>
    </>
  )
}

export default App
       
