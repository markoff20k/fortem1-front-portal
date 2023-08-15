import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.fortem1.app',
  appName: '@fortem/frontend',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
