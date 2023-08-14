export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI_DEV: string;
      MONGO_URI_PROD: string;
      PORT: number;
      CLIENT_URL: string;
      CLIENT_PORT: string;
      ENV: "dev" | "prod";
    }
  }
}
