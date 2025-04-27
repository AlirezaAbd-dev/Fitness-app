declare global {
  namespace NodeJs {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      EXPO_PUBLIC_ANDROID_CLIENT_ID: string;
      EXPO_PUBLIC_IOS_CLIENT_ID: string;
      EXPO_PUBLIC_CLIENT_ID: string;
    }
  }
}
