

const Home = () => {
  
  const stringvalue = "React Home Page"

  const yearbyprocess = 2000
  
  const arr = [1,2,3,4,5]
  
  return (
   <>
  <section className="bg-amber-300 p-10 flex justify-center items-center h-100" >
     <div>
      Home page
      <h3>{stringvalue}</h3>
       ,<p> {yearbyprocess}</p>
      </div>
        {
        arr.map((e)=>{
          <p>{e} </p>
        })
      }
     
  </section>
   </>
  )
}

export default Home


//line last final en dlast this  that is js code 
//we call it in insdie fo div so we can see js code in output 
//or we need to write console("stringvalue") like this we need to write 
///thisis call decalre arthictur eor declare viteprogram  we use in js and 4,5
//primitve js only use in upn of return 
//non primitive use in return mela or return ula we use it 
//line 18 we write we nned to arr then only output see pann amudoum
//js alway write in {} insid eof this 
//this is non pritimve

//1.use nav
//2.use pritive data type in code 