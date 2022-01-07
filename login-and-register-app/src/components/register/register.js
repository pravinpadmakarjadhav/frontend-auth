import React, {useState} from 'react';
import "./register.css";
import axios from "axios";

const Register = () => {


const [user ,setUser] = useState({

    name:"",
    email:"",
    password:"",
    reEnterPassword:""
})

const handleChange =e =>{

    
    const {name,value} = e.target
    setUser({ 
        ...user,
        [name]:value
    })
  
    
}

const register =()=>{
    const {name,email,password,reEnterPassword} =user
    if (name && email && password && (password === reEnterPassword)){
        alert('posted')
       //axios.post("http://localhost:9002/register",user)
    }else{
        alert ('invalid input')
    }
  
}

    return (
     
        <div className="register">
        {console.log("User",user)}
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="your name" onChange={handleChange} />
        <input type="text" name="email" value={user.email} placeholder="your email" onChange={handleChange} />
        <input type="password" name="password" value={user.password} placeholder="your password" onChange={handleChange} />
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder=" re-enter password" onChange={handleChange}  />
        <div className="button" onClick={register}>Register</div>
        <div>or</div>
        <div className="button">Login</div>
         
        </div>
        
    )
}

export default Register;
