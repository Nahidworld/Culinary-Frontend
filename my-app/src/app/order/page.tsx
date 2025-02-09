"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import OrderForm from "../../components/OrderForm"
import Navbar from "@/components/NavBar"
import Footer from "@/components/Footer"

const OrdersPage = () => {
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")

  // Fetch all orders on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3000/orders")
        setOrders(response.data)
      } catch (error) {
        setError("Error fetching orders. Please try again.")
      } finally {
        setLoading(false)
      }
    }
    fetchOrders()
  }, [])

  // Handle order deletion
  const handleDeleteOrder = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/orders/${id}`)
      setOrders(orders.filter((order) => order.id !== id))
    } catch (error) {
      setError("Error deleting order. Please try again.")
    }
  }

  // Handle order update
  const handleUpdateOrder = async (id: number, updatedOrder: any) => {
    try {
      await axios.patch(`http://localhost:3000/orders/${id}`, updatedOrder)
      setOrders(
        orders.map((order) => (order.id === id ? { ...order, ...updatedOrder } : order)),
      )
    } catch (error) {
      setError("Error updating order. Please try again.")
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
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      
      <h2 className="text-2xl font-bold mb-6 text-center">Orders</h2>
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {loading ? (
        <p>Loading orders...</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
              <p>{order.customerName} ordered {order.quantity} x {order.dish} {order.status}</p>
              <div>
                <Button
                  variant="outline"
                  onClick={() => handleDeleteOrder(order.id)}
                  className="mr-2"
                >
                  Delete
                </Button>
                <Button
                  onClick={() => handleUpdateOrder(order.id, { status: "completed" })}
                >
                  Mark as Completed
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <h2 className="text-xl font-bold mt-6 mb-4">Create New Order</h2>
      <OrderForm onOrderCreated={(newOrder) => setOrders([...orders, newOrder])} />
      </div>
        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default OrdersPage



// "use client"

// import { useState, useEffect } from "react"
// import axios from "axios"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Alert, AlertDescription } from "@/components/ui/alert"
// import OrderForm from "@/components/OrderForm"

// const OrdersPage = () => {
//   const [orders, setOrders] = useState<any[]>([])
//   const [loading, setLoading] = useState<boolean>(true)
//   const [error, setError] = useState<string>("")

//   // Fetch all orders on component mount
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get("/api/orders")
//         setOrders(response.data)
//       } catch (error) {
//         setError("Error fetching orders. Please try again.")
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchOrders()
//   }, [])

//   // Handle order deletion
//   const handleDeleteOrder = async (id: number) => {
//     try {
//       await axios.delete(`/api/orders/${id}`)
//       setOrders(orders.filter((order) => order.id !== id))
//     } catch (error) {
//       setError("Error deleting order. Please try again.")
//     }
//   }

//   // Handle order update
//   const handleUpdateOrder = async (id: number, updatedOrder: any) => {
//     try {
//       await axios.patch(`/api/orders/${id}`, updatedOrder)
//       setOrders(
//         orders.map((order) => (order.id === id ? { ...order, ...updatedOrder } : order)),
//       )
//     } catch (error) {
//       setError("Error updating order. Please try again.")
//     }
//   }

//   return (
//     <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-center">Orders</h2>
//       {error && (
//         <Alert variant="destructive" className="mb-4">
//           <AlertDescription>{error}</AlertDescription>
//         </Alert>
//       )}
//       {loading ? (
//         <p>Loading orders...</p>
//       ) : (
//         <ul className="space-y-4">
//           {orders.map((order) => (
//             <li key={order.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
//               <p>{order.customerName} ordered {order.quantity} x {order.dish} ({order.status})</p>
//               <div>
//                 <Button
//                   variant="outline"
//                   onClick={() => handleDeleteOrder(order.id)}
//                   className="mr-2"
//                 >
//                   Delete
//                 </Button>
//                 <Button
//                   onClick={() => handleUpdateOrder(order.id, { status: "completed" })}
//                 >
//                   Mark as Completed
//                 </Button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}

//       <h2 className="text-xl font-bold mt-6 mb-4">Create New Order</h2>
//       <OrderForm onOrderCreated={(newOrder) => setOrders([...orders, newOrder])} />
//     </div>
//   )
// }

// export default OrdersPage


// // import Footer from '@/components/Footer'
// // import Navbar from '@/components/NavBar'
// // import React from 'react'

// // function Order() {
// //   return (
// //     <div>
// //         <header>
// //             <div className="Nav">
// //                 <Navbar />
// //             </div>
// //             <br />
// //         </header>

// //         <footer>
// //             <Footer />
// //         </footer>
// //     </div>
// //   )
// // }

// // export default Order