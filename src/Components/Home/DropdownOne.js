import React,{useState} from "react";
import {Dropdown} from  "react-bootstrap";

const DropdownOne=(props)=>{
  const [data,setData]=useState("");
  const [data1,setData1]=useState("");

  const React=()=>{
      let react="react is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile application"
    setData(react)

  }
const Node=()=>{
 
 let node="Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser.Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser."
  setData1(node)
}
    return(
            <>
  <Dropdown>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
    choose language
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={React}>React</Dropdown.Item>
    <Dropdown.Item onClick={Node}>Node</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      <div className="container">
        <h1>{data}</h1>
        <h1>{data1}</h1>
      </div>
            </>
    )
        }

 export default DropdownOne;