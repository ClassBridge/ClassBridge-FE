import type {
  ChatRoomListResponse,
  CreateChatRoomResponse,
  JoinChatRoomResponse,
} from "@/lib/websocket/type";

export const getChatRoomList = async () => {
  try {
    const access = localStorage.getItem("accessToken");

    if (!access) {
      return null;
    }

    const response = await fetch("/api/chatRooms", {
      headers: {
        "Content-Type": "application/json",
        access,
      },
    });

    const res: ChatRoomListResponse = await response.json();

    return res.data;
  } catch (error) {
    return null;
  }
};

export const createChatRoom = async (classId: string) => {
  try {
    const access = localStorage.getItem("accessToken");

    if (!access) {
      return null;
    }

    const response = await fetch(`/api/chatRooms/${classId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access,
      },
    });

    const res: CreateChatRoomResponse = await response.json();

    return res.data.chatroomId;
  } catch (error) {
    return null;
  }
};

export const joinChatRoom = async (chatRoomId: string) => {
  try {
    const access = localStorage.getItem("accessToken");

    if (!access) {
      return null;
    }

    const response = await fetch(`/api/chatRooms/room/${chatRoomId}/join`, {
      headers: {
        "Content-Type": "application/json",
        access,
      },
    });

    const res: JoinChatRoomResponse = await response.json();

    return res.data;
  } catch (error) {
    return null;
  }
};

export const closeChatRoom = async (chatRoomId: string) => {
  try {
    const access = localStorage.getItem("accessToken");

    if (!access) {
      return null;
    }

    const response = await fetch(`/api/chatRooms/room/${chatRoomId}/close`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access,
      },
    });
  } catch (error) {
    return null;
  }
};

export const leaveChatRoom = async (chatRoomId: string) => {
  try {
    const access = localStorage.getItem("accessToken");

    if (!access) {
      return null;
    }

    const response = await fetch(`/api/chatRooms/room/${chatRoomId}/leave`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access,
      },
    });
  } catch (error) {
    return null;
  }
};
