
'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';
import Navuser from '@/components/NavUser';
import { useAuth } from '@/context/auth-context';

export default function HomePage() {
  const { user, logout } = useAuth();

  return (
    <div>
      <header>
        <div className="Nav">
            {/* <Navbar /> */}
            <Navuser />
        </div>
        <br />
      </header>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back Chef {user?.name}!</h2>
      {/* <p className="mb-4">Email: {user?.email}</p> */}
      <p className="mb-4">{user?.email}</p>
      

      <button
        onClick={logout}
        className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
        Logout
      </button>
    </div>
    <footer>
      <Footer />
    </footer>
    </div>
  );
}



// import Footer from '@/components/Footer'
// import Navbar from '@/components/NavBar'
// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//         <header>
//             <div className="Nav">
//                 <Navbar />
//             </div>
//             <br />
//         </header>
//         <main>

//         </main>
//         <footer>
//             <Footer />
//         </footer>
//     </div>
//   )
// }

// export default Home