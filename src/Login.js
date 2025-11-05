import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  const[Username , setUsername] = useState ('')
      const[Password , setPassword] = useState ('')
    
              const[oldUsername , setOldUsername] = useState(localStorage.getItem("Username"))
                const[oldPassword , setOldPassword] = useState(localStorage.getItem("Password"))
              
          const handleLogin = (e) =>{
            e.preventDefault()

            if(oldUsername === Username && oldPassword === Password){
              toast.success("Login success") 

              setTimeout(() =>{
                window.location.href = "/Homepage1"
              } , 3000) 


            }else{
                toast.error("Login failed")
              }
          }
          
              
            
  return (
    <div>
        <ToastContainer/>
            <h1>Login Page</h1>
      
            <form onSubmit={handleLogin}>
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

       <button type='submit'>Login</button>   
       </form>   
    </div>
  )
}

export default Login