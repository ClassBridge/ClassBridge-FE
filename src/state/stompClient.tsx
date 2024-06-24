import { createContext, useContext, useState, useEffect } from "react";
import { Client, Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";

interface StompClient {
  stompClient: Client | undefined;
  disconnect: () => void;
}

const StompClient = createContext<StompClient | null>(null);
export const useStompClient = () => useContext(StompClient);

interface Props {
  children: React.ReactNode;
}

export default function StompClientProvider({ children }: Props) {
  const [stompClient, setStompClient] = useState<Client>();

  useEffect(() => {
    if (localStorage) {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        const socket = new SockJS(
          `${process.env.ALLOWED_ORIGIN}/CB-websocket?access_token=${accessToken}`,
        );
        const stompClient = Stomp.over(socket);

        stompClient.activate();
        stompClient.onConnect = () => {
          setStompClient(stompClient);
        };
        return;
      }
    }

    setStompClient(undefined);
  }, []);

  useEffect(() => {
    if (!stompClient) {
      return;
    }

    return () => {
      stompClient.deactivate();
      setStompClient(undefined);
    };
  }, [stompClient]);

  const disconnect = () => {
    if (stompClient) {
      stompClient.deactivate();
      setStompClient(undefined);
    }
  };

  return (
    <StompClient.Provider value={{ stompClient, disconnect }}>
      {children}
    </StompClient.Provider>
  );
}
