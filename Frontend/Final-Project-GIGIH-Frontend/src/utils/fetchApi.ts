import axios, { AxiosResponse } from "axios";
import { API_URL } from "./constant";

type ApiResponse = {
  axiosResponse: AxiosResponse<any, any> | null;
  error: string | null;
};

export const get = async (param: string) => {
  const response = await axios.get(`http://localhost:1337/api/${param}`);

  return response;
};

type LoginType = {
  username: string;
  password: string;
};
export const login = async ({
  username,
  password,
}: LoginType): Promise<ApiResponse> => {
  let response: ApiResponse = { axiosResponse: null, error: null };
  try {
    response = {
      axiosResponse: await axios.post(`${API_URL}/users/login`, {
        username,
        password,
      }),
      error: null,
    };
    return response;
  } catch (error) {
    response.error = "User does not exists";
    return response;
  }
};

export const getVideos = async (): Promise<ApiResponse> => {
  let response: ApiResponse = { axiosResponse: null, error: null };
  try {
    response = {
      axiosResponse: await axios.get(`${API_URL}/videos/thumbnails`),
      error: null,
    };
    return response;
  } catch (error: any) {
    response.error = `Error: ${error.message}`;
    return response;
  }
};
