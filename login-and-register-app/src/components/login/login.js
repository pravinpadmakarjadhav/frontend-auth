import React, {useState} from 'react';
import "./login.css";
import axios from 'axios';
import {useHistory} from "react-router-dom"
const Login = ({setLoginUser}) => {

const history = useHistory();

    const [user,setUser] = useState({

        name:"",
        email:"",
       
    })
    
    const handleChange = e =>{
    
        
        const {name,value} = e.target
        setUser({ 
            ...user,
            [name]:value
        })
      
        
    }

    const login =()=> {
        axios.post("http://localhost:9002/login",user)
        .then(res => {alert(res.data.message)
        setLoginUser(res.data.user)
        history.push("/")
         } )
    }
    
    return (
        <div className="login">
     
        <h1>login</h1>
        <input type="text" name="email" value={user.email} onChange={handleChange}placeholder="enter email" />
        <input type="password" name="password"  value={user.password} onChange={handleChange} placeholder="enter password"/>
        <div className="button" onClick={login}> login</div>
        <div>or</div>
        <div className="button" onClick={()=> history.push("/register")}>register</div>
         
        </div>
    )
}

export default Login;
