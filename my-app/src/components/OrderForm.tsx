"use client"

import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

const OrderForm = ({ onOrderCreated }: { onOrderCreated: (newOrder: any) => void }) => {
  const [name, setName] = useState<string>("")
  const [dish, setDish] = useState<string>("")
  const [quantity, setQuantity] = useState<number>(1)
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess(false)

    if (!name || !dish || quantity <= 0) {
      setError("All fields are required and quantity must be greater than 0.")
      return
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/order",
        {
          customerName: name,
          dish,
          quantity,
          status: "pending",
        },
        { withCredentials: true }
      )
      onOrderCreated(res.data)
      setSuccess(true)
      setName("")
      setDish("")
      setQuantity(1)
    } catch (error) {
      setError("Error creating order. Please try again.")
    }
  }

  return (
    <div>
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {success && (
        <Alert className="mb-4">
          <AlertDescription>Order successfully created!</AlertDescription>
        </Alert>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Customer Name</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="dish">Dish</Label>
          <Input
            type="text"
            id="dish"
            value={dish}
            onChange={(e) => setDish(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Place Order
        </Button>
      </form>
    </div>
  )
}

export default OrderForm
