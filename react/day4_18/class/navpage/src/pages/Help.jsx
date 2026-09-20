import { Link } from "react-router-dom";

const Help = () => {
  return (
   <>
    <section className="bg-green-300 p-10 flex justify-center items-center h-100" >
     <div>
      Help page
     </div>
     <div>
        <Link to="/services">going to Service page</Link>
     </div>
  </section>
   </>
  )
}

export default Help
//now we add new after try plain page now we add servise page in this
//after this now we run when we click help page it go to normal help how there is servies when we click that he move to another page servies but the pag ewas empty because in servies page div ula namba onu add pannala 