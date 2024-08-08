import { UseQueryResult, useQuery } from "@tanstack/react-query";
// import type { UserInfoResponse } from "@/app/api/users/type";
import { getUser } from "@/lib/supabase/actions/user";
import { Tables } from "@/lib/supabase/types";

// export const useUserData: (
//   access: string | null | undefined,
// ) => UseQueryResult<UserInfoResponse> = (access) => {
//   return useQuery({
//     queryKey: ["user", access],
//     queryFn: () =>
//       fetch("/api/users", { headers: { access: access! } }).then((res) =>
//         res.json(),
//       ),
//     enabled: !!access,
//   });
// };

export const useUserData = (id: string | null | undefined) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () =>
      getUser(id!).then((data) => data.data?.[0] as Tables<"user">),
    enabled: !!id,
  });
};
