"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { handleLogin, handleLogout } from "@/lib/tokenClient";
// import { createClient } from "@/lib/supabase/client";
// import type { Session } from "@supabase/supabase-js";

// const AuthContext = createContext<Session | null>(null);

interface AuthContext {
  isAuthenticated: boolean;
  accessToken: string | null;
  login: (accessToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContext | null>(null);
export const useAuthContext = () => useContext(AuthContext);

interface Props {
  children: React.ReactNode;
}

export default function AuthContextProvider({ children }: Props) {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    if (localStorage) {
      const token = localStorage.getItem("accessToken");
      setAccessToken(token);
    }
  }, []);

  const login = (accessToken: string) => {
    setAccessToken(accessToken);
    handleLogin(accessToken);
  };

  const logout = () => {
    setAccessToken(null);
    handleLogout();
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!accessToken,
        accessToken,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );

  // ------- supabase ------- //
  //   const supabase = createClient();
  //   const [isMounted, setIsMounted] = useState(false);
  //   const [session, setSession] = useState<Session | null>(null);
  //   useEffect(() => {
  //     setIsMounted(true);
  //   }, []);
  //   if (isMounted) {
  //     supabase.auth.onAuthStateChange((_event, session) => {
  //       setSession(session);
  //     });
  //   }
  //   return (
  //     <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
  //   );
}
