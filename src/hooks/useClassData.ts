import { useQuery } from "@tanstack/react-query";

const endpoint = "/api/class/";

export const useClassData = (classId: string) => {
  return useQuery({
    queryKey: ["class", classId],
    queryFn: () => fetch(endpoint + classId),
  });
};
