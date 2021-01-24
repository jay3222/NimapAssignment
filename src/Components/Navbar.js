import React from 'react';
import {NavLink} from "react-router-dom";
const Navbar=()=>{
   

    return(

        <>  
        <div className="bg-light">
            <nav className=" navbar navbar-expand-md navbar-light bg-light ">
            <div className="container">
              <h3 className="p-2 d-sm-mb-3" style={{fontSize:'2.5rem',textDecoration:'none',fontWeight:'bold',letterSpacing:'3px',backgroundColor:"black",color:"white"}} to="/home">NIMAP</h3>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink  activeClassName="menu_active"exact  className="nav-link mr-2" to="/home">Home <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item mr-1">
        <NavLink  activeClassName="menu_active"exact className="nav-link mr-2" to="/tasks">Tasks</NavLink>
      </li>
      <li className="nav-item mr-1">
        <NavLink  activeClassName="menu_active"exact className="nav-link mr-2" to="/user">User</NavLink>
      </li>
  
    </ul>
    
  </div>


</div>
</nav>
            
        </div>

        </>
    );
};
export default Navbar;