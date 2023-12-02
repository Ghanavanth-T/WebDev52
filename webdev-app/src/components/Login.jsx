import React, {useState} from 'react'
import { Link } from 'react-router-dom';

// Based on the role given do it. Don't change it unless you are not assigned

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = () => {
    e.preventDefault();
    console.log(email);
  }
  
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-96 p-6 shadow-lg bg-[#279EFF] rounded-md border-r-2000">
        <h1 className="text-4xl text-white text-center font-bold">
          Login</h1>
        <hr className = "mt-3" />
         <form onSubmit={handleSubmit}>
          <div className = "mt-3">
          <label for="email" className = "block text-base mb-2 text-white">Reva Email Id</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="YourRevaEmailId@reva.edu.in" id="email" className = "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-grey-600" name="email" />
          </div>
          <div className="mt-3">
          <label for="password" className = "block text-base mb-2 text-white">Password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***************" id="password" className = "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-grey-600" name="password" />
          </div>
          <div className="mt-3 flex justify-between items-center text-white">
            <div>
            <input type="checkbox" />
              <label className="ml-2">Remember Me</label>
              </div>
              <div>
                <a href="#" className ="text-white font-semibold">Forgot Password</a>
              </div>
          </div>
          <div>
          <button type="submit" className="border-2 border-[#279EFF] bg-[#0C356A] text-white py-1 mt-7 w-full rounded-md hover:bg-white hover:text-black font-semibold">&nbsp;&nbsp;Log In</button>
          </div>
        </form> 
       </div> 
    </div>
  )
}

export default Login
