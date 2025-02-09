import Image from "next/image"
import Link from "next/link"
import router from "next/router"

const Navuser = () => {
  return (
    <header className="bg-neutral-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
        <div className="flex-none">
          <Link href="http://localhost:3000/">
            <Image src="/chef/logo1.jpeg" alt="Logo" width={48} height={48} className="rounded-full" />
          </Link>
        </div>
        <div className="flex-auto space-x-10 text-center">
          <Link href="/home">
            <button className="btn">HOME</button>
          </Link>
          <Link href="/recipe">
            <button className="btn">RECIPE</button>
          </Link>
          <Link href="/menu">
            <button className="btn">MENU</button>
          </Link>
          <Link href="/order">
            <button className="btn">ORDER</button>
          </Link>

        </div>
        <div className="flex-none">
          {/* <Link href="/home"> */}
            <button onClick={() => router.push('/login')} className="btn w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 ">Log Out</button>
          {/* </Link> */}
        </div>
      </div>
    </header>
  )
}

export default Navuser
