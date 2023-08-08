export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI_DEV: string;
      MONGO_URI_PROD: string;
      SERVER_PORT: number;
      ENV: "test" | "dev" | "prod";
    }
  }
}
