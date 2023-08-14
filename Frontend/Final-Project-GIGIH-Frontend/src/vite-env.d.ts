/// <reference types="vite/client" />
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_WS_URL: string;
      VITE_API_URL: string;
      VITE_APP_KEY: string;
      VITE_SERVER_PORT: number;
      VITE_PUSHER_APPID: string;
      VITE_PUSHER_KEY: string;
      VITE_PUSHER_SECRET: string;
    }
  }
}
