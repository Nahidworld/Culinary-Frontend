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




















// "use client"

// import axios from "axios"
// import { type FormEvent, useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Alert, AlertDescription } from "@/components/ui/alert"

// const Register = () => {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")
//   const [success, setSuccess] = useState(false)

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault()
//     setError("")
//     setSuccess(false)

//     if (!name || !email || !password) {
//       setError("All fields are required")
//       return
//     }

//     try {
//       const res = await axios.post(
//         "http://localhost:3000/auth/register",
//         {
//           name,
//           email,
//           password,
//         },
//         {
//           withCredentials: true, // This is important for CORS
//         },
//       )
//       setSuccess(true)
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         setError(error.response?.data?.message || "Registration failed. Please try again.")
//       } else {
//         setError("An unexpected error occurred. Please try again.")
//       }
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-center">Welcome Chef!</h2>
//       {error && (
//         <Alert variant="destructive" className="mb-4">
//           <AlertDescription>{error}</AlertDescription>
//         </Alert>
//       )}
//       {success && (
//         <Alert className="mb-4">
//           <AlertDescription>User Successfully Registered!</AlertDescription>
//         </Alert>
//       )}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <Label htmlFor="name">First Name</Label>
//           <Input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div>
//           <Label htmlFor="email">Email</Label>
//           <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div>
//           <Label htmlFor="password">Password</Label>
//           <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <Button type="submit" className="w-full">
//           Register
//         </Button>
//       </form>
//     </div>
//   )
// }

// export default Register

