'use client'

import Navbar from "@/components/NavBar"
import axios from "axios"
import { type FormEvent, useState } from "react"
import React from 'react'

// const Register = async () => {
const Register =  () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/auth/register", {
                name,
                email,
                password,
            })
            alert("User Successfully Registered!")
        } catch (error) {
            alert("Registration Failed")
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
        <div></div>
        {/* <h2>Welcome Chef!</h2> */}
        <section className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="space-y-4">
      <h2>Welcome Chef!</h2>
        <div>
          <label htmlFor="name" className="block mb-1">
            First Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full btn btn-primary">
          Register
        </button>
      </form>
    </section>
    </div>
  )
}

export default Register

