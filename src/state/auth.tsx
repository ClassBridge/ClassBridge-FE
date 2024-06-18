import { createClient } from "@/lib/supabase/server";
import { Session } from "@supabase/supabase-js";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext<Session | null>(null);
export const useAuthContext = () => useContext(AuthContext);

interface Props {
  children: React.ReactNode;
}

export default function AuthContextProvider({ children }: Props) {
  const supabase = createClient();

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        setSession(null);
      } else if (session) {
        setSession(session);
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, [supabase.auth]);

  return (
    <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
  );
}
