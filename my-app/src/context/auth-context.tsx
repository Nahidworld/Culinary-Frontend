// src/context/auth-context.tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

type User = {
  id: string;
  email: string;
  name: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const { data } = await axios.get('/auth/me', {
          withCredentials: true,
        });
        setUser(data);
      } catch (error) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    const { data } = await axios.post(
      '/auth/login',
      { email, password },
      { withCredentials: true },
    );
    setUser(data.user);
  };

  const register = async (name: string, email: string, password: string) => {
    const { data } = await axios.post(
      '/auth/register',
      { name, email, password },
      { withCredentials: true },
    );
    setUser(data.user);
  };

  const logout = async () => {
    await axios.post('/auth/logout', {}, { withCredentials: true });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);


// 'use client';

// import { createContext, useContext, useEffect, useState } from 'react';
// import Cookies from 'js-cookie';
// import apiClient from '@/lib/api-client';

// type User = {
//   id: string;
//   email: string;
//   name: string;
// };

// type AuthContextType = {
//   user: User | null;
//   login: (email: string, password: string) => Promise<void>;
//   register: (name: string, email: string, password: string) => Promise<void>;
//   logout: () => void;
//   isLoading: boolean;
// };

// const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     async function loadUser() {
//       try {
//         const { data } = await apiClient.get('/auth/me');
//         setUser(data);
//       } catch (error) {
//         setUser(null);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     loadUser();
//   }, []);

//   const login = async (email: string, password: string) => {
//     const { data } = await apiClient.post('/auth/login', { email, password });
//     Cookies.set('token', data.token, { expires: 7 }); // Store token in cookie
//     setUser(data.user);
//   };

//   const register = async (name: string, email: string, password: string) => {
//     const { data } = await apiClient.post('/auth/register', { name, email, password });
//     Cookies.set('token', data.token, { expires: 7 });
//     setUser(data.user);
//   };

//   const logout = () => {
//     Cookies.remove('token');
//     setUser(null);
//     apiClient.post('/auth/logout');
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);