import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Home() {
  const[fname , setFname] = useState('')
    const[lname , setLname] = useState('')
      const[Username , setUsername] = useState('')
    const[Password , setPassword] = useState('')
  const handleSignup = (e) =>{
    e.preventDefault()
     if(
                fname === '' || lname === '' || Username === '' || Password === ''

        ){
          toast.error("please fill all the details")
        }else{
          localStorage.setItem("Username" , Username)
          localStorage.setItem("Password", Password)
          toast.success("Signup Success")
          setTimeout(() => {
            window.location.href = "/loginpage"
            
          }, 3000);
        }
          
  }
  return (
    <div>
         <ToastContainer />
      <h1>Signup Page</h1>

      <form onSubmit={handleSignup}>
      <input
       type='text'
       placeholder='Enter the FirstName'
       value={fname}
       onChange={(e) => setFname(e.target.value)}
       />
         <input
       type='text'
       placeholder='Enter the LastName'
        value={lname}
       onChange={(e) => setLname(e.target.value)}
       />

         <input
       type='text'
       placeholder='Enter the Username'
        value={Username}
       onChange={(e) => setUsername(e.target.value)}
       />
         <input
       type='password'
       placeholder='Enter the password'
        value={Password}
       onChange={(e) => setPassword(e.target.value)}
       />

       <button type='submit'>Sign Up</button>   
       </form>   
    </div>
  )
}

export default Home