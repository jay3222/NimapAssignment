import React, { useState } from "react";
import {NavLink, useParams} from "react-router-dom";
import auth from "../Auth";


const ChangePassword=(props)=>{

    const localData=JSON.parse(localStorage.getItem('user-info'));
    console.log(localData);
    const[name,setName]=useState(localData.userName);
    const[password,setPassword]=useState();

        const inputEvent=(e)=>{
            setPassword(e.target.value);
            console.log(e.target.value);

        }
        const onSubmit=(e)=>{
            e.preventDefault();
            

        }


    return(
        <>
        <div className="Main_Div">
            <div className="Center_Div">
                <form onSubmit={onSubmit}>
                    <h3 className="pt-0  mb-3" > USER FORM </h3>
                    <div className="form-group mb-2">
                        <label className="form-level-group">USERNAME :</label>
                        <input type="text"name="userName"  value={name} className="form-control" required></input>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-level-group"> NEW PASSWORD :</label>
                        <input type="password"
                         name="password"
                         className="form-control" 
                         value={password} 
                         onChange={inputEvent}
                         required></input>
                    </div>
                    <div className="mt-5 d-flex flex-row justify-content-between mx-auto"> 
                       <NavLink to="/user"> <button className="btn btn-md btn-danger mr-4">SAVE PASSWORD</button></NavLink>
                       <button 
                      onClick={() => {
                
                        auth.logout(() => {
                            alert("logout successfully");
                          props.history.push("/");
                        });
                      }}
                     className="btn btn-md btn-danger">LOGOUT</button>
                    </div>
                </form>

            </div>
        </div>

        </>
    )
}
export default ChangePassword;
