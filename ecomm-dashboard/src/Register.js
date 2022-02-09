import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function Register() {
const [name, setName] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const history = useHistory();

async function signUp()
{
  let item = {name, password, email};
  
  let result = await fetch("http://127.0.0.1:8000/api/register", {
     method:"POST",
     headers:{
       "Content-type":"application/json",
       "Accept":"application/json"
     },
     body:JSON.stringify(item)
  });
  result = await result.json();
  console.warn(result);
  localStorage.setItem("user-info", JSON.stringify(result));
  history.push("add");
}

  return (
    <div className='col-sm-6 offset-sm-3'>
      <h1>User Sign Up</h1>
    
      <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} className='form-control' />
      <br />
      <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' />
      <br />
      <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' />
      <br />
      <button onClick={signUp} className='btn btn-primary'>Sign Up</button>
    </div>
  )
}

export default Register