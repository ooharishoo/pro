import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Homepage() {

  const[oldUsername , setOldUsername] = useState(localStorage.getItem("Username"))

  useEffect(() =>{
    toast.success("Welcome " + oldUsername)
  },[])
 
           
  return (
    <div>
         <ToastContainer />
      <h1>Home Page</h1>




     </div>
  )
}

export default Homepage