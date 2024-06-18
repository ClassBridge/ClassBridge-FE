import ChatList from "@/components/pages/my/chat/ChatList";
import ChatRoom from "@/components/pages/my/chat/ChatRoom";

export default function ChatPage() {
  return (
    <>
      <section className="w-[300px] h-full border border-gray-light">
        <ChatList />
      </section>
      <section className="flex-1 h-full border border-gray-light">
        <ChatRoom />
      </section>
    </>
  );
}
