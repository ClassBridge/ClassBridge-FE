// import { createContext, useContext, useState, useEffect } from "react";
// import { Client, Stomp } from "@stomp/stompjs";
// import SockJS from "sockjs-client";
// import { useAuthContext } from "@/state/auth";

// interface StompClient {
//   stompClient: Client | undefined;
//   disconnect: () => void;
// }

// const StompClient = createContext<StompClient | null>(null);
// export const useStompClient = () => useContext(StompClient);

// interface Props {
//   children: React.ReactNode;
// }

// export default function StompClientProvider({ children }: Props) {
//   const authContext = useAuthContext();
//   const [stompClient, setStompClient] = useState<Client>();

//   useEffect(() => {
//     if (authContext?.isAuthenticated) {
//       const socket = new SockJS(
//         `${process.env.NEXT_PUBLIC_ALLOWED_ORIGIN}/CB-websocket?access_token=${authContext.accessToken}`,
//       );
//       const stompClient = Stomp.over(socket);

//       stompClient.activate();
//       stompClient.onConnect = () => {
//         setStompClient(stompClient);
//       };
//     } else {
//       setStompClient(undefined);
//     }
//   }, [authContext]);

//   useEffect(() => {
//     if (!stompClient) {
//       return;
//     }

//     return () => {
//       stompClient.deactivate();
//       setStompClient(undefined);
//     };
//   }, [stompClient]);

//   const disconnect = () => {
//     if (stompClient) {
//       stompClient.deactivate();
//       setStompClient(undefined);
//     }
//   };

//   return (
//     <StompClient.Provider value={{ stompClient, disconnect }}>
//       {children}
//     </StompClient.Provider>
//   );
// }
