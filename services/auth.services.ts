import { ApiResponse } from "@/types/user.types";
import http from "./Api";

/**
 * Fetches a random user from the API.
 *
 * Makes an HTTP GET request to retrieve a single random user with U.S. nationality.
 *
 * @async
 * @function getRandomUser
 * @returns {Promise<ApiResponse>} A promise that resolves to the API response containing user data.
 */
export const getRandomUser = async () => {
  const { data } = await http.get<ApiResponse>("?results=1&nat=us");
  return data;
};
