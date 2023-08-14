export const reducerCases = {
  SET_USER: "SET_USER",
};

// export const API_URL = "http://localhost:1337/api";
export const API_URL = import.meta.env.VITE_API_URL;

export const expiresOneHour = new Date(
  Date.now() + 60 * 60 * 1000
).toUTCString();
