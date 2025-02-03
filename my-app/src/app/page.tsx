"use client";
import Navbar from "@/components/NavBar";
import RegistrationForm from "@/components/RegistrationForm";
import axios from "axios"
import { FormEvent, useState } from "react"


const componentName =()=> {
  // const add
  const [name,setname] =useState('');
  const [email,setemail] =useState('');
  const [password,setpassword] =useState('');

  const ADD = async (e: FormEvent) => {
    e.preventDefault()
    try{
      const res = await axios.post('http://localhost:3000/auth/register',
        {
          "name":name,
          "email": email,
          "password": password
        }
      );
      alert('User Successfully Registered!');
    }
    catch(error){
      alert('Registration Failed')
    }
  }
  return (
    <div>
      <header>
      <div className="Nav">
              <Navbar />
            </div>
      <br />
      </header>
      <main>
        <RegistrationForm/>
      </main>
      
      <div>
        {/* <header className="bg-neutral-200">
          <div className="flex">
            <div className="flex-auto">
              <a href="https://google.com">
              <img src="/chef/logo1.jpeg" 
              alt="Logo" 
              className="w-12 h-12 rounded-full"/></a>
            </div>
            
          </div>
        </header> */}
      </div>

      {/* <section className="btt">
        <form onSubmit={ADD}>
          <label htmlFor="name">First Name
            <input type="text" id="name" value={name} onChange={(e)=> setname(e.target.value)} />
          </label>
          <label htmlFor="email">Email
            <input type="text" value={email} onChange={(e)=> setemail(e.target.value)} />
          </label>
          <label htmlFor="password">Password
            <input type="password" value={password} onChange={(e)=> setpassword(e.target.value)} />
          </label>
          <button type="submit">ADD</button>
        </form>
      </section> */}


    </div>
  )


}
export default componentName;

