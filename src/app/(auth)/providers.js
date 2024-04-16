'use client';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const router = useRouter();

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    router.push('/masuk');
  };

  return (
    <AuthContext.Provider value={{ token, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
