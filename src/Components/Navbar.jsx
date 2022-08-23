import React from 'react'
import logo from '../img/logo.png'
import login1 from '../img/login1.png'
import 'bootstrap/dist/css/bootstrap.min.css';


function nav(){
    return <>
        <nav class="navbar bg-primary text-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" width="30" height="30" class="d-inline-block align-text-top"/> 
            
            <p class="d-inline ">The Brand affiliate</p>
          </a>
            
            <img src={login1} alt="login1"/>
        </div>
      </nav>
    </>


}

export default nav