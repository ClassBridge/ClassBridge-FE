export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      chat: {
        Row: {
          chatroom_id: string;
          content: string;
          created_at: string;
          id: string;
          is_read: boolean;
          user_id: string;
        };
        Insert: {
          chatroom_id: string;
          content: string;
          created_at?: string;
          id?: string;
          is_read?: boolean;
          user_id: string;
        };
        Update: {
          chatroom_id?: string;
          content?: string;
          created_at?: string;
          id?: string;
          is_read?: boolean;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "chat_chatroom_id_fkey";
            columns: ["chatroom_id"];
            isOneToOne: false;
            referencedRelation: "chatroom";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "chat_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["id"];
          },
        ];
      };
      chatroom: {
        Row: {
          created_at: string;
          id: string;
          last_activity: string;
          unread_count: number;
          user1_id: string;
          user2_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          last_activity?: string;
          unread_count?: number;
          user1_id: string;
          user2_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          last_activity?: string;
          unread_count?: number;
          user1_id?: string;
          user2_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "chatroom_user1_id_fkey";
            columns: ["user1_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "chatroom_user2_id_fkey";
            columns: ["user2_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["id"];
          },
        ];
      };
      class: {
        Row: {
          address: string;
          address1: Database["public"]["Enums"]["city"];
          address2: string;
          address3: string;
          category: Database["public"]["Enums"]["category"];
          created_at: string;
          description: string | null;
          duration: number;
          end_date: string;
          faq_answers: string[] | null;
          faq_questions: string[] | null;
          id: string;
          image_urls: string[] | null;
          like_cnt: number | null;
          name: string;
          parking: boolean;
          personnel: number;
          price: number;
          rating_avg: number | null;
          review_cnt: number | null;
          start_date: string;
          tags: string[] | null;
          tutor_id: string;
        };
        Insert: {
          address: string;
          address1: Database["public"]["Enums"]["city"];
          address2: string;
          address3: string;
          category: Database["public"]["Enums"]["category"];
          created_at?: string;
          description?: string | null;
          duration: number;
          end_date: string;
          faq_answers?: string[] | null;
          faq_questions?: string[] | null;
          id?: string;
          image_urls?: string[] | null;
          like_cnt?: number | null;
          name: string;
          parking?: boolean;
          personnel: number;
          price: number;
          rating_avg?: number | null;
          review_cnt?: number | null;
          start_date: string;
          tags?: string[] | null;
          tutor_id: string;
        };
        Update: {
          address?: string;
          address1?: Database["public"]["Enums"]["city"];
          address2?: string;
          address3?: string;
          category?: Database["public"]["Enums"]["category"];
          created_at?: string;
          description?: string | null;
          duration?: number;
          end_date?: string;
          faq_answers?: string[] | null;
          faq_questions?: string[] | null;
          id?: string;
          image_urls?: string[] | null;
          like_cnt?: number | null;
          name?: string;
          parking?: boolean;
          personnel?: number;
          price?: number;
          rating_avg?: number | null;
          review_cnt?: number | null;
          start_date?: string;
          tags?: string[] | null;
          tutor_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "class_tutor_id_fkey";
            columns: ["tutor_id"];
            isOneToOne: false;
            referencedRelation: "tutor";
            referencedColumns: ["id"];
          },
        ];
      };
      lesson: {
        Row: {
          class_id: string;
          created_at: string;
          date: string;
          id: string;
          participants: string[] | null;
          time: string;
        };
        Insert: {
          class_id: string;
          created_at?: string;
          date: string;
          id?: string;
          participants?: string[] | null;
          time: string;
        };
        Update: {
          class_id?: string;
          created_at?: string;
          date?: string;
          id?: string;
          participants?: string[] | null;
          time?: string;
        };
        Relationships: [
          {
            foreignKeyName: "lesson_class_id_fkey";
            columns: ["class_id"];
            isOneToOne: false;
            referencedRelation: "class";
            referencedColumns: ["id"];
          },
        ];
      };
      likes: {
        Row: {
          class_id: string;
          created_at: string;
          id: string;
          user_id: string;
        };
        Insert: {
          class_id: string;
          created_at?: string;
          id?: string;
          user_id: string;
        };
        Update: {
          class_id?: string;
          created_at?: string;
          id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "like_class_id_fkey";
            columns: ["class_id"];
            isOneToOne: false;
            referencedRelation: "class";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "like_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["id"];
          },
        ];
      };
      reservation: {
        Row: {
          created_at: string;
          id: string;
          lesson_id: string;
          quantity: number;
          status: Database["public"]["Enums"]["reservation_status"];
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          lesson_id: string;
          quantity: number;
          status?: Database["public"]["Enums"]["reservation_status"];
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          lesson_id?: string;
          quantity?: number;
          status?: Database["public"]["Enums"]["reservation_status"];
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "reservation_lesson_id_fkey";
            columns: ["lesson_id"];
            isOneToOne: false;
            referencedRelation: "lesson";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "reservation_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["id"];
          },
        ];
      };
      review: {
        Row: {
          author_id: string;
          class_id: string;
          content: string;
          created_at: string;
          id: string;
          image_urls: string[] | null;
          rating: number;
        };
        Insert: {
          author_id: string;
          class_id: string;
          content: string;
          created_at?: string;
          id?: string;
          image_urls?: string[] | null;
          rating: number;
        };
        Update: {
          author_id?: string;
          class_id?: string;
          content?: string;
          created_at?: string;
          id?: string;
          image_urls?: string[] | null;
          rating?: number;
        };
        Relationships: [
          {
            foreignKeyName: "review_author_id_fkey";
            columns: ["author_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "review_class_id_fkey";
            columns: ["class_id"];
            isOneToOne: false;
            referencedRelation: "class";
            referencedColumns: ["id"];
          },
        ];
      };
      tutor: {
        Row: {
          account: string;
          bank: Database["public"]["Enums"]["bank"];
          business_registration_number: string | null;
          created_at: string;
          description: string | null;
          id: string;
        };
        Insert: {
          account: string;
          bank: Database["public"]["Enums"]["bank"];
          business_registration_number?: string | null;
          created_at?: string;
          description?: string | null;
          id?: string;
        };
        Update: {
          account?: string;
          bank?: Database["public"]["Enums"]["bank"];
          business_registration_number?: string | null;
          created_at?: string;
          description?: string | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "tutor_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "user";
            referencedColumns: ["id"];
          },
        ];
      };
      user: {
        Row: {
          birthdate: string | null;
          created_at: string;
          gender: Database["public"]["Enums"]["gender"] | null;
          id: string;
          interests: string[] | null;
          is_tutor: boolean;
          phone_number: string;
          profile_url: string | null;
          username: string;
        };
        Insert: {
          birthdate?: string | null;
          created_at?: string;
          gender?: Database["public"]["Enums"]["gender"] | null;
          id?: string;
          interests?: string[] | null;
          is_tutor?: boolean;
          phone_number: string;
          profile_url?: string | null;
          username: string;
        };
        Update: {
          birthdate?: string | null;
          created_at?: string;
          gender?: Database["public"]["Enums"]["gender"] | null;
          id?: string;
          interests?: string[] | null;
          is_tutor?: boolean;
          phone_number?: string;
          profile_url?: string | null;
          username?: string;
        };
        Relationships: [
          {
            foreignKeyName: "users_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      bank: "KB" | "SHINHAN" | "WOORI" | "HANA" | "NH" | "KAKAOBANK";
      category: "cooking" | "handmade" | "fitness" | "drawing" | "gardening";
      city:
        | "서울"
        | "경기"
        | "부산"
        | "인천"
        | "대구"
        | "울산"
        | "광주"
        | "대전"
        | "경상북도"
        | "경상남도"
        | "전라북도"
        | "전라남도"
        | "충청북도"
        | "충청남도"
        | "강원도"
        | "제주도"
        | "세종";
      gender: "male" | "female";
      reservation_status: "pending" | "canceled" | "success" | "error";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
