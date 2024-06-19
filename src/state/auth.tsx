import { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Session } from "@supabase/supabase-js";

const AuthContext = createContext<Session | null>(null);
export const useAuthContext = () => useContext(AuthContext);

interface Props {
  children: React.ReactNode;
}

export default function AuthContextProvider({ children }: Props) {
  const supabase = createClient();

  const [isMounted, setIsMounted] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) {
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }

  return (
    <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
  );
}
