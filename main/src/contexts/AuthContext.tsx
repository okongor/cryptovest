import React, { useState, createContext, useContext } from "react";
type User = {
  email: string;
  name: string;
};
type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
};
const AuthContext = createContext<AuthContextType | null>(null);
export function AuthProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const login = async (email: string, password: string) => {
    // This is a mock implementation. In a real app, you'd call your auth API
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setUser({
      email,
      name: email.split("@")[0]
    });
  };
  const signup = async (email: string, password: string, name: string) => {
    // This is a mock implementation. In a real app, you'd call your auth API
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setUser({
      email,
      name
    });
  };
  const logout = () => {
    setUser(null);
  };
  return <AuthContext.Provider value={{
    user,
    login,
    signup,
    logout,
    isAuthenticated: !!user
  }}>
      {children}
    </AuthContext.Provider>;
}
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};