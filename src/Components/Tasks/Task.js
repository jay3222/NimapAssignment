import React,{useContext} from 'react'
import {ContactData} from "./Reducer/ContactData";
import {NavLink} from "react-router-dom";
 
const Task = () => {
    const {users,dispatch}=useContext(ContactData);
    console.log(users);
   
    
    return (
  <>
  <div className="container mt-5 px-5 ">
      <div className="row">
          <div className="col-lg-12 col-md-12 col-11">
           <NavLink to="tasks/addTask"><button className="btn btn-lg btn-danger ">Add Task</button></NavLink> 
  <table className="table mt-5">
  <thead className="mt-5 bg-danger">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Completed</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
      {users.map((data,ind)=>(
         <tr>
      <td >{ind+1}</td>
      <td>{data.title}</td>
      <td>{`${data.completed}`}</td>
      <td><><button
        onClick={()=>dispatch({type:'DELETE_CONTACT',id:data.id})}
      className=" btn btn-md btn-danger ">DELETE</button></></td>
    </tr>
       
      ))}
  </tbody>
</table>

</div></div></div>

  </>
    )
}

export default Task;
