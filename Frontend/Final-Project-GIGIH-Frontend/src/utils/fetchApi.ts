import axios, { AxiosResponse } from "axios";
import { API_URL } from "./constant";
import { LoginType } from "./types";

type ApiResponse = {
  axiosResponse: AxiosResponse<any, any> | null;
  error: string | null;
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
  const response: ApiResponse = { axiosResponse: null, error: null };
  try {
    response.axiosResponse = await axios.get(`${API_URL}/videos/thumbnails`);

    return response;
  } catch (error: any) {
    response.error = `Error: ${error.message}`;

    return response;
  }
};

export const getProductsFromVideo = async (
  videoId: string
): Promise<ApiResponse> => {
  const response: ApiResponse = { axiosResponse: null, error: null };
  try {
    const result = await axios.get(
      `${API_URL}/products/get-product-list-by-videoId/${videoId}`
    );
    response.axiosResponse = result;

    return response;
  } catch (error) {
    response.error = "Something has happend";

    return response;
  }
};

export const getVideoById = async (videoId: string): Promise<ApiResponse> => {
  const response: ApiResponse = { axiosResponse: null, error: null };
  try {
    const result = await axios.get(`${API_URL}/videos/${videoId}`);
    response.axiosResponse = result;

    return response;
  } catch (error) {
    response.error = "Something has happend";

    return response;
  }
};

export const getVideoComments = async (
  videoId: string
): Promise<ApiResponse> => {
  const response: ApiResponse = { axiosResponse: null, error: null };
  try {
    const result = await axios.get(
      `${API_URL}/users/comments/get-comment-from-video/${videoId}`
    );
    response.axiosResponse = result;

    return response;
  } catch (error) {
    response.error = "Something has happend";

    return response;
  }
};

export const getUserProducts = async (userId: string): Promise<ApiResponse> => {
  const response: ApiResponse = { axiosResponse: null, error: null };
  try {
    const result = await axios.get(
      `${API_URL}/products/get-products-by-user/${userId}`
    );
    response.axiosResponse = result;

    return response;
  } catch (error) {
    response.error = "Something has happend";

    return response;
  }
};

export const submitComment = async (
  username: string,
  comment: string,
  videoId: string
): Promise<ApiResponse> => {
  const response: ApiResponse = { axiosResponse: null, error: null };
  try {
    const result = await axios.post(
      `${API_URL}/users/comments/submit-comment/${videoId}`,
      { username, comment }
    );
    response.axiosResponse = result;

    return response;
  } catch (error) {
    response.error = "Something has happend";

    return response;
  }
};

export const searchVideo = async (searchText: string): Promise<ApiResponse> => {
  const response: ApiResponse = { axiosResponse: null, error: null };
  try {
    const result = await axios.get(`${API_URL}/videos/search/${searchText}`);
    response.axiosResponse = result;

    return response;
  } catch (error) {
    response.error = "Something has happened";

    return response;
  }
};
