'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Mock user types
export type UserRole = 'admin' | 'user';
export interface User {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
}

interface Session {
  access_token: string;
  user: User;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string, role: UserRole) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading session from localStorage
    const storedUser = localStorage.getItem('mockUser');
    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);
      setUser(parsedUser);
      setSession({
        access_token: 'mock-token',
        user: parsedUser,
      });
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate delay

    // Mock sign-in success
    const mockUser: User = {
      id: 'mock-id-123',
      email,
      full_name: 'Mock User',
      role: 'user',
    };

    localStorage.setItem('mockUser', JSON.stringify(mockUser));
    setUser(mockUser);
    setSession({
      access_token: 'mock-access-token',
      user: mockUser,
    });
    setLoading(false);
  };

  const signUp = async (email: string, password: string, fullName: string, role: UserRole) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate delay

    const newUser: User = {
      id: `mock-${Date.now()}`,
      email,
      full_name: fullName,
      role,
    };

    localStorage.setItem('mockUser', JSON.stringify(newUser));
    setUser(newUser);
    setSession({
      access_token: 'mock-access-token',
      user: newUser,
    });
    setLoading(false);
  };

  const signOut = async () => {
    await new Promise((resolve) => setTimeout(resolve, 300)); // Simulate delay
    localStorage.removeItem('mockUser');
    setUser(null);
    setSession(null);
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
