    import React,{useState,useEffect, createContext,useReducer} from "react";
    import {contactReducer} from "../Action/ContactReducer";
    import axios from "axios";

export const ContactData=createContext();

const ContactDataProvider=(props)=>{
 
  const [user,setUsers]=useState([]);
    const [contacts, dispatch] = useReducer(contactReducer,user
       
    
      ,()=>{
        const localData=localStorage.getItem('contacts');
       return  localData?JSON.parse(localData):[]
      });

      const loadData= async()=>{
        const res= await axios.get('http://jsonplaceholder.typicode.com/todos/');
        setUsers(res.data);
        console.log(res.data);
      };  
    
    

 
      useEffect(()=>{
        loadData();
        localStorage.setItem('contacts',JSON.stringify(contacts));
      },[contacts]);
    
    return(
        <ContactData.Provider value={{users:contacts,dispatch}}>
            {props.children}
        </ContactData.Provider>

    );
}

export default ContactDataProvider;