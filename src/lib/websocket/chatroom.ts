import type {
  CreateChatRoomResponse,
  JoinChatRoomResponse,
} from "@/lib/websocket/type";

export const createChatRoom = async (classId: string) => {
  try {
    const response = await fetch(`/api/chatRooms/${classId}`, {
      method: "POST",
    });

    const res: CreateChatRoomResponse = await response.json();

    return res.data.chatroomId;
  } catch (error) {
    return error;
  }
};

export const joinChatRoom = async (chatRoomId: string) => {
  try {
    const response = await fetch(`/api/chatRooms/${chatRoomId}/join`);

    const res: JoinChatRoomResponse = await response.json();

    return res.data;
  } catch (error) {
    return error;
  }
};

export const closeChatRoom = async (chatRoomId: string) => {
  try {
    const response = await fetch(`/api/chatRooms/${chatRoomId}/close`, {
      method: "POST",
    });
  } catch (error) {
    return error;
  }
};

export const leaveChatRoom = async (chatRoomId: string) => {
  try {
    const response = await fetch(`/api/chatRooms/${chatRoomId}/leave`, {
      method: "POST",
    });
  } catch (error) {
    return error;
  }
};
