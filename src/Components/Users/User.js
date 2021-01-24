import React,{useHistory,useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import auth from "../Auth";




const User=(props)=>{
    const localData=JSON.parse(localStorage.getItem('user-info'));
    console.log(localData.userName);
    const [uName,setName]=useState(localData.userName);
    const [password,setPassword]=useState(localData.password);


    return(
        <>
        <div className="Main_Div">
            <div className="Center_Div">
                <form>
                    <h3 className="pt-0  mb-3" > USER FORM </h3>
                    <div className="form-group mb-2">
                        <label className="form-level-group">USERNAME :</label>
                        <input type="text" name="userName" value={uName} className="form-control" required></input>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-level-group">PASSWORD :</label>
                        <input type="password" name="password"value={password} className="form-control" required></input>
                    </div>
                    <div className="mt-5 d-flex flex-row justify-content-between mx-auto"> 
                       <NavLink to="/user/NewPassword"> <button className="btn btn-md btn-danger mr-4">CHANGE PASSWORD</button></NavLink>
                     <button 
                      onClick={() => {
                        auth.logout(() => {
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
export default User;
