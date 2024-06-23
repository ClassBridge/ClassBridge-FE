import { createContext, useContext, useState, useEffect } from "react";
// import { createClient } from "@/lib/supabase/client";
// import type { Session } from "@supabase/supabase-js";

// const AuthContext = createContext<Session | null>(null);

interface AccessToken {
  accessToken: string | null;
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthContext = createContext<AccessToken | null>(null);
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

  useEffect(() => {
    if (localStorage) {
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
      } else {
        localStorage.removeItem("accessToken");
      }
    }
  }, [accessToken]);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
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
