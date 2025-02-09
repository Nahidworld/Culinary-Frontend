// src/app/dashboard/page.tsx
import { useProtectedRoute } from '@/hooks/useProtectedRoute';

export default function Dashboard() {
  const { user, isLoading } = useProtectedRoute();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
    </div>
  );
}

// 'use client';

// import ProtectedRoute from '@/components/protected-route';
// import { useAuth } from '@/context/auth-context';

// export default function DashboardPage() {
//   const { user, logout } = useAuth();

//   return (
//     <ProtectedRoute>
//       <div className="max-w-md mx-auto mt-10">
//         <h1 className="text-2xl font-bold mb-4">Welcome, {user?.name}!</h1>
//         <p>Email: {user?.email}</p>
//         <button
//           onClick={logout}
//           className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//         >
//           Logout
//         </button>
//       </div>
//     </ProtectedRoute>
//   );
// }