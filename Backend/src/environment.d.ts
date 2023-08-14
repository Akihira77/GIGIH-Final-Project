export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI_DEV: string;
      MONGO_URI_PROD: string;
      SERVER_PORT: number;
      PUSHER_APPID: string;
      PUSHER_KEY: string;
      PUSHER_SECRET: string;
      ENV: "test" | "dev" | "prod";
    }
  }
}
