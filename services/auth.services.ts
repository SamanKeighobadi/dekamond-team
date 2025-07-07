import { ApiResponse } from "@/types/user.types";
import http from "./Api";


export const getRandomUser = async () => {
  const { data } = await http.get<ApiResponse>("?results=1&nat=us");
  return data;
};
