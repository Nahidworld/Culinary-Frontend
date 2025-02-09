import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Copy } from 'lucide-react'
import Link from 'next/link'

function recipe() {
  return (
    <div>
      <header>
          <div className="Nav">
              <Navbar />
          </div>
          <br />
      </header>
      <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-48 bg-[#A5AB9B] p-4">
        <nav className="space-y-2">

        <Link href="/menu" className="hover:text-[#1B4D0B]">
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/20 hover:text-white">
            Recipe List
          </Button>       
        </Link>
        <Link href="/menu/add.tsx" className="hover:text-[#1B4D0B]">
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/20 hover:text-white">
          Add
          </Button>       
        </Link>
        <Link href="/menu/update.tsx" className="hover:text-[#1B4D0B]">
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/20 hover:text-white">
            Update
          </Button>       
        </Link>
        <Link href="/menu/delete.tsx" className="hover:text-[#1B4D0B]">
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/20 hover:text-white">
            Delete
          </Button>       
        </Link>
          
          {/* <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/20 hover:text-white">
            Add
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/20 hover:text-white">
            Update
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/20 hover:text-white">
            Delete
          </Button> */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Recipe Cards */}
          {Array.from({ length: 9 }).map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/chef/food3.jpg"
                    alt="The Ultimate Burger"
                    className="h-full w-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg">The Ultimate Burger</CardTitle>
              </CardContent>
              <CardFooter className="flex items-center justify-between p-4">
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>5 min</span>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Copy className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default recipe