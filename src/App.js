import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Tasks from "./Components/Tasks/Task";
import User from "./Components/Users/User";
import ChangePassword from "./Components/Users/ChangePassword";
import Login from "./Components/Login";
import Information from "./Components/Home/Information";
import DropdownOne from "./Components/Home/DropdownOne";
import Task from "./Components/Tasks/Task";
import ContactDataProvider from "./Components/Tasks/Reducer/ContactData";
import {ProtectedRoutes} from "./Components/ProtectedRoutes";
import AddTaskForm from "./Components/Tasks/AddTaskForm";



const App=()=>{
    return(
        <>


         <Router>
          <Navbar/>
            <Switch>
            <ContactDataProvider>
            <Route exact path="/" component={Login}/>
            <ProtectedRoutes exact path="/home" component={Home} />
            <ProtectedRoutes exact path="/tasks" component={Tasks} />
            <ProtectedRoutes exact path="/user/NewPassword" component={ChangePassword} />
            <ProtectedRoutes exact path="/user" component={User} />
            <ProtectedRoutes exact path="/information" component={Information}/>
            <ProtectedRoutes exact path="/dropdownone" component={DropdownOne}/>
            <ProtectedRoutes exact path="/tasks" component={Task}/>
            <ProtectedRoutes exact path="/tasks/addTask" component={AddTaskForm}/>
            <Redirect to="/"/>  
            </ContactDataProvider>
            </Switch>
            </Router>
  
        </>
    );
};
export default App;
