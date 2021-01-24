import React,{createContext} from "react";
import {useForm} from "react-hook-form";
import classNames from 'classnames';
import { useHistory } from "react-router-dom";
import auth from "./Auth";





const Login=(props)=>{
    const history=useHistory();
    const{register,handleSubmit, errors}=useForm({
        mode:"onTouched",
    });
    console.log(errors);


    const onSubmit=(data)=>{
        console.log(data);
        localStorage.setItem("user-info",JSON.stringify(data))
        alert("Login successfully");
        redirect();
        


    }

    const redirect=()=>{
        auth.login(()=>{
           props.history.push("/home");
            

        })
     
    
    }
    

    return(
        <>

        <div className="Login_Div">
            <div className="LoginCenter_Div  p-5">
                <form onSubmit={handleSubmit(onSubmit)}> 
                    <h3 className="pt-0  mb-3" > LOGIN FORM </h3>
                    <div className="form-group mb-3">
                        <label className="form-level-group">USERNAME :</label>
                        <input type="text"
                        name="userName" 
                        className={classNames("form-control",{"is-invalid":errors.userName})}
                         ref={register({
                             required:true,
                             minLength:{
                                 value:3,
                                },
                             maxLength:8,
                         })}
                         style={{boxShadow:'none',border:'0px'}}>
                            </input>
                            {errors.userName?.type==="required"&&(<div className="invalid-feedback">this field is required</div>)}
                            {errors.userName?.type==="minLength"&&(<div className="invalid-feedback">please enter minimum 3 characters</div>)}
                            {errors.userName?.type==="maxLength"&&(<div className="invalid-feedback">please enter less than 8 characters</div>)}

                    </div>
                    <div className="form-group mb-3">
                        <label className="form-level-group">PASSWORD :</label>
                        <input type="password"
                         name="password"
                         className={classNames("form-control",{"is-invalid":errors.password})}
                         ref={register({
                            required:true,
                            pattern:{
                                value:/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,

                            }
                         })}
                     style={{boxShadow:'none',border:'0px'}}></input>
                      {errors.password?.type==="required"&&(<div className="invalid-feedback">this field is required</div>)}
                            {errors.password?.type==="pattern"&&(<div className="invalid-feedback">password(uppercase,lowercase,Number/special chr.min-8)</div>)}
                          

                    </div>
                    <div className="mt-5 d-flex flex-row justify-content-between mx-auto"> 
                       <button type="submit" className="btn btn-md btn-danger">LOGIN</button>
                    </div>
                </form>

            </div>
        </div>

        </>
    )
}
export default Login;
