import { UseQueryResult, useQuery } from "@tanstack/react-query";
import type { UserInfoResponse } from "@/app/api/users/type";
import { getAccessToken } from "@/lib/tokenClient";
// import { getUser } from "@/lib/supabase/actions/user";
// import { Tables } from "@/lib/supabase/types";

export const useUserData: () => UseQueryResult<UserInfoResponse> = () => {
  const token = getAccessToken();

  return useQuery({
    queryKey: ["user", token],
    queryFn: () =>
      fetch("/api/users", { headers: { ...token } }).then((res) => res.json()),
    enabled: !!token,
  });
};

// export const useUserData = (id: string | null | undefined) => {
//   return useQuery({
//     queryKey: ["user", id],
//     queryFn: () =>
//       getUser(id!).then((data) => data.data?.[0] as Tables<"user">),
//     enabled: !!id,
//   });
// };
