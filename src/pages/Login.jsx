// import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
//  const [email,setEmail] = useState("manavpal@gmail.com");

// const [password,setPassword] = useState("123456789");
const email = "manavpal@gamil.com";
const password = "123456789"

const navigate = useNavigate();

const formData = (e)=>{
    e.preventDefault();

}

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="border border-purple-700 shadow-xl shadow-purple-100  rounded sm:w-1/2 lg:w-1/4 flex flex-col pt-12 items-center pb-6">
          <h1 className="text-indigo-600 font-bold text-3xl text-center">
            Admin <span className="text-black">Login</span>
          </h1>
          <p className="w-3/4 text-center  text-gray-800">
            Enter your credential to access the admin panel
          </p>

          <div>
            <form className="mt-12" onSubmit={(e)=>formData(e)}>
              <div className="flex flex-col mr-15">
                <label className="text-gray-600" htmlFor="email">
                  Email
                </label>
                <input
                defaultValue={email}
                  type="text"
                  name="email"
                  className="border-b border-gray-500 w-6/5 p-2 outline-none text-gray-600"
                  placeholder="your email id"
                />
                <label className="text-gray-600 mt-4" htmlFor="password">
                  Password
                </label>
                <input
                defaultValue={password}
                  type="password"
                  name="password"
                  className="border-b border-gray-500 w-5/4 px-2 py-1 outline-none text-gray-600"
                  placeholder="your password"
                />
              </div>

              <div className="flex justify-center mt-5 w-full">
                <button onClick={()=>navigate("/admin/logout")} className="border ml-2 text-center w-full py-2.5 rounded bg-indigo-700 transiton-all text-white hover:bg-indigo-600 ">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login