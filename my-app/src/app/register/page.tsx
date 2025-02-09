"use client"

import axios from "axios"
import { type FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context" // Assuming you have auth context

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { register } = useAuth() // Using auth context for registration

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    if (!name || !email || !password) {
      setError("All fields are required")
      setIsLoading(false)
      return
    }

    try {
      await register(name, email, password)
      router.push("/dashboard") // Redirect after successful registration
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Registration failed. Please try again.")
      } else {
        setError("An unexpected error occurred. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Welcome Chef!</h2>
      
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">First Name</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
            minLength={6}
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </Button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => router.push("/login")}
            className="text-blue-600 hover:underline"
            disabled={isLoading}
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  )
}

export default Register











// 'use client';

// import { useState } from 'react';
// import { useAuth } from '@/context/auth-context';
// import { useRouter } from 'next/navigation';

// export default function RegisterPage() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { register, isLoading } = useAuth();
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await register(name, email, password);
//       router.push('/dashboard');
//     } catch (err) {
//       setError('Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-4">Register</h1>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-2 mb-4 border rounded"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 mb-4 border rounded"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 mb-4 border rounded"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
//           disabled={isLoading}
//         >
//           {isLoading ? 'Loading...' : 'Register'}
//         </button>
//       </form>
//     </div>
//   );
// }

// //2nd edition
// // 'use client';

// // import Footer from '@/components/Footer';
// // import Navbar from '@/components/NavBar';
// // import { useAuth } from '@/context/auth-context';
// // import { useRouter } from 'next/navigation';
// // import { useState } from 'react';

// // export default function RegisterPage() {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const { register, isLoading } = useAuth();
// //   const router = useRouter();

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     try {
// //       await register(name, email, password);
// //     } catch (err) {
// //       setError('Registration failed. Please try again.');
// //     }
// //   };

// //   return (
// //     <div>
// //       <header>
// //         <div className="Nav">
// //             <Navbar />
// //         </div>
// //         <br />
// //       </header>
// //     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
// //       <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
// //       {error && <p className="text-red-500 mb-4">{error}</p>}
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <input
// //           type="text"
// //           placeholder="Name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           className="w-full p-2 border rounded"
// //           required
// //         />
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           className="w-full p-2 border rounded"
// //           required
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           className="w-full p-2 border rounded"
// //           required
// //         />
// //         <button
// //           type="submit"
// //           className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
// //           disabled={isLoading}
// //         >
// //           {isLoading ? 'Loading...' : 'Register'}
// //         </button>
// //       </form>
// //       <p className="mt-4 text-center">
// //         Already have an account?{' '}
// //         <button onClick={() => router.push('/login')} className="text-blue-500 hover:underline">
// //           Login here
// //         </button>
// //       </p>
// //     </div>
// //     <footer>
// //         <Footer />
// //     </footer>
// //     </div>
// //   );
// // }


// // // 'use client'

// // // import Footer from "@/components/Footer"
// // // import Navbar from "@/components/NavBar"
// // // import axios from "axios"
// // // import { type FormEvent, useState } from "react"
// // // import React from 'react'

// // // // const Register = async () => {
// // // const Register =  () => {
// // //     const [name, setName] = useState("");
// // //     const [email, setEmail] = useState("");
// // //     const [password, setPassword] = useState("");

// // //     const handleSubmit = async (e: FormEvent) => {
// // //         e.preventDefault()
// // //         try {
// // //             const res = await axios.post("http://localhost:3000/auth/register", {
// // //                 name,
// // //                 email,
// // //                 password,
// // //             })
// // //             alert("User Successfully Registered!")
// // //         } catch (error) {
// // //             alert("Registration Failed")
// // //         }
// // //     }

// // //   return (
// // //     <div>
// // //         <header>
// // //             <div className="Nav">
// // //                 <Navbar />
// // //             </div>
// // //             <br />
// // //         </header>
// // //         <div></div>
// // //         {/* <h2>Welcome Chef!</h2> */}
// // //         <section className="max-w-md mx-auto mt-8">
// // //       <form onSubmit={handleSubmit} className="space-y-4">
// // //       <h2>Welcome Chef!</h2>
// // //         <div>
// // //           <label htmlFor="name" className="block mb-1">
// // //             First Name
// // //           </label>
// // //           <input
// // //             type="text"
// // //             id="name"
// // //             value={name}
// // //             onChange={(e) => setName(e.target.value)}
// // //             className="w-full px-3 py-2 border rounded"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label htmlFor="email" className="block mb-1">
// // //             Email
// // //           </label>
// // //           <input
// // //             type="email"
// // //             id="email"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             className="w-full px-3 py-2 border rounded"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label htmlFor="password" className="block mb-1">
// // //             Password
// // //           </label>
// // //           <input
// // //             type="password"
// // //             id="password"
// // //             value={password}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             className="w-full px-3 py-2 border rounded"
// // //           />
// // //         </div>
// // //         <button type="submit" className="w-full btn btn-primary">
// // //           Register
// // //         </button>
// // //       </form>
// // //     </section>
// // //     <br />
// // //     <footer>
// // //       <Footer />
// // //     </footer>
// // //     </div>
// // //   )
// // // }

// // // export default Register

