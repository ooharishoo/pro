import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdMyLocation } from "react-icons/md";
import "./Home.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Mountain from "./Images/Mountain.jpg"
import Header from './Common/Header';

function Home() {
  //  var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  const[num , setNum] = useState(0)
  // const[sample , setSample] = useState("Hello")
  const handleIncrement = () =>{
    setNum(num + 1)}
    const handleDecrement = () =>{
      setNum(num - 1)
    }
    const handleNext = () =>{
    
      setTimeout(() =>{
                             window.location.href = "/loginpage"
            },3000)
          }
  
  return (
    <div>
      <h1>This is Loginpage</h1>
      <h2>{num}</h2>
      {/* <h3>{sample}</h3> */}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleNext}>Next</button>
      
    {/* <div className='Nav-wrap'>
      <label>Home</label>
       <label>Cart</label>
        <label>Products</label>
         <label>Cart</label>
          <label>Profile</label>
           <label>Login</label>
           </div>


            <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider> */}

  

    </div>
    
  )
}

export default Home