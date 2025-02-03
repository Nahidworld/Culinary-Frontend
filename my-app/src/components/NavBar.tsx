import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <header className="bg-neutral-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
        <div className="flex-none">
          <Link href="https://google.com">
            <Image src="/chef/logo1.jpeg" alt="Logo" width={48} height={48} className="rounded-full" />
          </Link>
        </div>
        <div className="flex-auto space-x-10 text-center">
          <button className="btn">HOME</button>
          <button className="btn">RECIPE</button>
          <button className="btn">MENU</button>
          <button className="btn">ORDER</button>
        </div>
        <div className="flex-none">
          <button className="btn btn-outline btn-success ">Sign In</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
