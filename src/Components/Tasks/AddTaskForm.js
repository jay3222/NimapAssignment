import React,{useContext,useState} from "react";
import { useHistory } from "react-router-dom";
import {ContactData} from "./Reducer/ContactData";
import shortid from 'shortid';


const AddTaskForm=()=>{
    const {dispatch}=useContext(ContactData);

    const history=useHistory();
    const [data,setData]=useState(({
        id:(shortid.generate()),
        title:"",
        completed:"",
    }))



    const onChange=(e)=>{
       console.log(e.target.value);
       const{name,value}=e.target;
       setData((preValue)=>
       {
           return{
               ...preValue,
               [name]:value,
           };
       });
    };

    const formSubmit=(e)=>{
        e.preventDefault();
        console.log(data);
        dispatch({
           type:'ADD_CONTACT',
           newContact:{     
             id:data.id,
            title:data.title,
            completed:data.completed,}
        })
        alert("data inserted successfully on local storage");
        redirect();

    }

    const redirect=()=>{
        history.push("/tasks");
    
    }

    

    return(
        <>
        <section className="mt-5">
            <h1></h1>
        <div className="container card mt-5 p-5 "style={{backgroundColor:"black",color:"white",marginTop:"440px"}} width="5rem">
                <div className="card-title">
                <h3 className="d-block justify-content-start bg-secondary w-25 p-3" >ADD TASK </h3>
            
                </div>
                <div className="card-body">
                <form onSubmit={formSubmit}> 
                   
                    <div className="form-group mb-2">
                        <label className="form-level-group">TITLE:</label>
                        <input type="text"
                        name="title"
                        value={data.title}
                        onChange={onChange}
                        className="form-control" 
                        required style={{boxShadow:'none',border:'0px'}}></input>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-level-group">COMPLETED:</label>
                        <input type="text"
                        name="completed"
                        value={data.completed}
                        onChange={onChange}
                         className="form-control"
                          required 
                          style={{boxShadow:'none',border:'0px'}}></input>
                    </div>
                   
                    <div className="mt-3 d-flex flex-row justify-content-between mx-auto"> 
                 <button  type="submit" className="btn btn-md btn-danger">ADD</button>
                    </div>
                </form>
                </div>

            </div>
            </section>
    

        </>
    )
}
export default AddTaskForm;