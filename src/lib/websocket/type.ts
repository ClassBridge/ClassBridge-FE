export interface CreateChatRoomResponse {
  code: string;
  message: string;
  data: CreateChatRoomResponseData;
}

interface CreateChatRoomResponseData {
  chatroomId: number;
  chatRoomUrl: string;
}

export interface JoinChatRoomResponse {
  code: string;
  message: string;
  data: JoinChatRoomData;
}

interface JoinChatRoomData {
  chatroomId: number;
  senderId: number;
  initiatedBy: number;
  initiatedTo: number;
  createdAt: Date;
  updatedAt: Date;
  messages: Message[];
}

interface Message {
  messageId: string;
  senderId: number;
  message: string;
  isRead: Boolean;
  sendTime: string;
}
