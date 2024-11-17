declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GATEWAY_PORT: string;
      NODE_ENV?: 'production';
    }
  }
}

export {};
